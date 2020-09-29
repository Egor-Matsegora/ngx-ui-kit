import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare type ShareDirection = 'vertical' | 'horisontal';
declare type Social = 'vk' | 'ok' | 'tw' | 'fb';
declare type ShareTheme = 'dark' | 'light';

@Component({
  selector: 'ngx-ui-share',
  templateUrl: './ngx-ui-share.component.html',
  styleUrls: ['./ngx-ui-share.component.sass'],
})
export class NgxUiShareComponent implements OnInit {
  @Input() direction: ShareDirection = 'vertical';
  @Input() theme: ShareTheme = 'light';

  @Output() openContainer = new EventEmitter();
  @Output() closeContainer = new EventEmitter();
  @Output() shared: EventEmitter<Social> = new EventEmitter();
  isOpened: boolean;
  constructor() {}

  ngOnInit(): void {}

  share(social: Social) {
    const url: string = window.location.href;
    const share = {
      vk: 'http://vk.com/share.php?url=' + url,
      fb: 'https://www.facebook.com/sharer/sharer.php?u=' + url,
      tw: 'https://twitter.com/intent/tweet?url=' + url,
      ok: 'https://connect.ok.ru/offer?url=' + url,
    };
    window.open(share[social], 'Поделиться');
    this.shared.emit(social);
  }

  toggleShare() {
    if (this.isOpened) {
      this.closeShare();
    } else {
      this.openShare();
    }
  }

  openShare() {
    this.isOpened = true;
    this.openContainer.emit();
  }

  closeShare() {
    this.isOpened = false;
    this.closeContainer.emit();
  }
}
