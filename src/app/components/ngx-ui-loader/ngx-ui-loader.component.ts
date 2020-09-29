import { Component, Input, OnInit } from '@angular/core';
import { Themes } from 'src/app/interfaces/theme.interfaces';

export declare type LoaderTypes = 'progressbar' | 'bubbles' | 'spiner';

@Component({
  selector: 'ngx-ui-loader',
  templateUrl: './ngx-ui-loader.component.html',
  styleUrls: ['./ngx-ui-loader.component.sass'],
})
export class NgxUiLoaderComponent implements OnInit {
  @Input() type: LoaderTypes = 'progressbar';
  @Input() theme: Themes = 'blue';

  constructor() {}

  ngOnInit(): void {}
}
