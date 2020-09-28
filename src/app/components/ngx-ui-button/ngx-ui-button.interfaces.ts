export interface ButtonOptions {
  type?: ButtonType;
  disabled?: boolean;
  shape?: ButtonShape;
  size?: ButtonSize;
  fill?: ButtonFill;
  theme?: ButtonTheme;
  action?: ButtonActions;
  stretched?: boolean;
}

export declare type ButtonType = 'submit' | 'reset' | 'button';

export declare type ButtonShape = 'normal' | 'squere' | 'rounded';

export declare type ButtonSize = 'small' | 'medium' | 'large';

export declare type ButtonFill = 'full' | 'bordered' | 'transparent' | 'gradient' | 'polygon';

export declare type ButtonTheme = 'blue' | 'dark' | 'green';

export declare type ButtonActions = 'success' | 'error' | 'alert' | 'info' | 'standart';
