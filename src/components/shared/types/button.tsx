import IMouseEvents from './mouse-events';

export interface IButton extends IMouseEvents {
  id?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  children?: React.ReactNode;
}
