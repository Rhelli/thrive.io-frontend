const selectInputDefaultGen = petsArr => {
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

export default selectInputDefaultGen;
