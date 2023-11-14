import { REGEX } from '@constant/regex';

export const validate = (type, value) => {
  const regex = REGEX[type];
  new RegExp(/[0-9]/).test;
  if (regex) return new RegExp(regex).test(value);
  return false;
};
