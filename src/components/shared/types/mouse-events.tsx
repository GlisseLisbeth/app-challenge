export default interface IMouseEvents {
  onClick?: (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void | undefined;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void | undefined;
}
