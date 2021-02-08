import { IButton } from './shared/types/button';

const Button = ({ type, id, disabled, children }: IButton) => {
  return (
    <button
      type={type ? type : undefined}
      {...(id && { id })}
      className={`button ${
        disabled !== undefined && !disabled && 'button--disabled'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
