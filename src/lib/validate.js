import { REGEX } from '@constant/regex';

export const validate = (type, value) => {
  const regex = REGEX[type];
  if (regex) return regex.test(value);
  return false;
};
