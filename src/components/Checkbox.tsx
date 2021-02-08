import { ICheckbox } from './shared/types/checkbox';

const Checkbox = ({ name, id, errors, children, onChange }: ICheckbox) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          id={id ? id : undefined}
          name={name ? name : undefined}
          type="checkbox"
          className="checkbox__checker"
          onChange={onChange}
        />
        <i
          className={`checkbox__checkmark ${
            errors?.length && 'checkbox__checkmark--error'
          }`}
        ></i>
      </label>
      <p className="checkbox__text">{children}</p>
    </div>
  );
};

export default Checkbox;
