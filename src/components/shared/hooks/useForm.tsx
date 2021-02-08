import { useState } from 'react';

const useForm = (initialState = {}): any => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleCheckboxChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.checked,
    });
  };

  const handleSelectChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    fieldReset?: string
  ) => {
    setValues({
      ...values,
      [target.name]: target.checked,
      ...(fieldReset && { [fieldReset]: '' }),
    });
  };

  return [values, handleInputChange, handleSelectChange, handleCheckboxChange];
};

export default useForm;
