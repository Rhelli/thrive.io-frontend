export const selectInputDefaultGen = petsArr => {
  const defaultConfig = [];
  if (petsArr) {
    petsArr.forEach(pet => {
      const obj = {
        label: pet,
        value: pet,
      };
      defaultConfig.push(obj);
    });
  }
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

export const getPropertyIds = arr => {
  const propertyIds = [];
  if (arr) {
    arr.forEach(property => {
      propertyIds.push(property.id);
    });
  }
  return propertyIds;
};
