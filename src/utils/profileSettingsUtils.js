export const selectInputDefaultGen = petsArr => {
  const defaultConfig = [];
  petsArr.forEach(pet => {
    const obj = {
      label: pet,
      value: pet,
    };
    defaultConfig.push(obj);
  });
  return defaultConfig;
};

export const reactSelectOutputFormatter = arr => {
  if (arr) {
    const result = [];
    arr.forEach(obj => {
      result.push(obj.value);
    });
    return result;
  }
  return arr;
};
