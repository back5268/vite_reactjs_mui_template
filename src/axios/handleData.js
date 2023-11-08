export const createFormData = (body = {}, files) => {
  const data = new FormData();
  if (files && typeof files === 'object') {
    for (const key in files) {
      if (key in files) {
        if (Array.isArray(files[key])) {
          files[key].forEach((f) => {
            data.append(key, f);
          });
        } else data.append(key, files[key]);
      }
    }
  }
  Object.keys(body).forEach((key) => {
    if (typeof body[key] === 'object') data.append(key, JSON.stringify(body[key]));
    else if (body[key] || body[key] === 0 || body[key] === '') data.append(key, body[key]);
  });
  return data;
};
export const convertData = (body = {}) => {
  const convertObject = (obj) => {
    const newObj = { ...obj };
    for (const key in newObj) {
      if (typeof newObj[key] === 'object') {
        newObj[key] = convertObject(newObj[key]);
      } else {
        newObj[key] = JSON.stringify(newObj[key]);
      }
    }
    return newObj;
  };

  return convertObject(body);
};
