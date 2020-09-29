import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ButtonOptions } from './ngx-ui-button.interfaces';

@Component({
  selector: 'ngx-ui-button',
  templateUrl: './ngx-ui-button.component.html',
  styleUrls: ['./ngx-ui-button.component.sass'],
})
export class NgxUiButtonComponent implements OnChanges, OnInit {
  @Input() buttonOptions: ButtonOptions;
  @Input() text: string = 'button';
  @Output() clicked = new EventEmitter();
  options: ButtonOptions;
  classNames: string[];

  private defaultOptions: ButtonOptions = {
    type: 'button',
    disabled: false,
    shape: 'normal',
    size: 'medium',
    fill: 'full',
    theme: 'blue',
    action: 'standart',
    stretched: false,
  };

  constructor() {}

  ngOnInit(): void {
    this.initButtonOptions();
    this.generateClasses();
  }

  ngOnChanges(): void {
    this.initButtonOptions();
    this.generateClasses();
  }

  private initButtonOptions(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.buttonOptions,
    };
  }

  private generateClasses(): void {
    this.classNames = [
      `ngx-ui-button--${this.options.size}`,
      `ngx-ui-button--${this.options.shape}`,
      `ngx-ui-button--${this.options.fill}`,
      `ngx-ui-button--theme-${this.options.theme}`,
      `ngx-ui-button--${this.options.action}`,
    ];
    this.options.stretched && this.classNames.push(`ngx-ui-button--${this.options.stretched}`);
  }
}
