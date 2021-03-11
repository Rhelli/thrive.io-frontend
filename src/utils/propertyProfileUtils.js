const flatmateDisplay = occupations => {
  let proCount = 0; let studCount = 0; let message = '';
  if (occupations.length < 1) message = 'No resident information yet.';
  occupations.forEach(occ => {
    if (occ === 'Professional') {
      proCount++;
    } else {
      studCount++;
    }
  });
  if (proCount < 1) {
    message = 'Student House';
  }
  if (studCount < 1) {
    message = 'Professional House';
  }
  if (proCount > studCount) {
    message = 'Mostly Professional House';
  }
  if (proCount < studCount) {
    message = 'Mostly Student House';
  }
  if (proCount === studCount) {
    message = 'Mixed Student & Professional House';
  }
  return message;
};

export default flatmateDisplay;
