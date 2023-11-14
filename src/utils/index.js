export * from './password-strength';
export * from './getInit';

export const removeUndefinedProps = (obj) => {
  for (let prop in obj) {
    if (!(obj[prop] || obj[prop] === '' || obj[prop] === 0)) {
      delete obj[prop];
    }
  }
  return obj;
};

export const refreshObject = (object) => {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (Array.isArray(object[key])) object[key] = [];
      else if (typeof object[key] === 'object') object[key] = {};
      else object[key] = '';
    }
  }
  return object;
};

export const removeEqualPropObject = (object1, object2) => {
  const changedProperties = {};
  for (const key in object1) {
    if (object1.hasOwnProperty(key) && JSON.stringify(object1[key]) !== JSON.stringify(object2[key])) {
      changedProperties[key] = object1[key];
    }
  }
  return changedProperties;
};

export const checkJson = (str) => {
  try {
    const data = JSON.parse(str);
    return data;
  } catch (e) {
    return false;
  }
};

export const removeSpecialCharacter = (string) => {
  const normalizedString = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const replacedString = normalizedString.replace(/đ/g, 'd').replace(/Đ/g, 'D');
  const resultString = replacedString.replace(/\s+/g, '-');
  return resultString;
};
