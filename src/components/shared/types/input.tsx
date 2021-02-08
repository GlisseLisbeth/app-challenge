import IMouseEvents from './mouse-events';

export interface IInput extends IMouseEvents {
  name: string;
  type: string;
  placeholder: string;
  id?: string;
  value?: string;
  maxLength?: number;
  errors?: string;
}
