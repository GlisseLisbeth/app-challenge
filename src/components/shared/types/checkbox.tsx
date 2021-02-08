import IMouseEvents from './mouse-events';

export interface ICheckbox extends IMouseEvents {
  name: string;
  id?: string;
  errors?: string;
  children?: React.ReactNode;
}
