import validator from 'validator';

export const validateCE = (value: string) => {
  if (validator.isEmpty(value)) return 'Campo Vacío';

  if (!validator.isLength(value, { min: 12, max: 12 }))
    return 'Se necesita 12 dígitos';

  return '';
};

export const validateDNI = (value: string) => {
  if (validator.isEmpty(value)) return 'Campo Vacío';

  if (!validator.isLength(value, { min: 8, max: 8 }))
    return 'Se necesita 8 dígitos';

  return '';
};

export const validateDate = (value: string) => {
  if (validator.isEmpty(value)) return 'Campo Vacío';

  const newValue = value.split('/').reverse().join('/');
  if (!validator.isDate(newValue, { delimiters: ['/'], strictMode: false })) {
    return 'El formato válido es DD/MM/AAAA';
  }

  return '';
};

export const validatePhone = (value: string) => {
  if (validator.isEmpty(value)) return 'Campo Vacío';

  if (!validator.isLength(value, { min: 9, max: 9 }))
    return 'Se necesita 9 dígitos';

  return '';
};
