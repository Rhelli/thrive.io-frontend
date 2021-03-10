const flatmateDisplay = occupations => {
  let proCount = 0; let studCount = 0;
  if (occupations.length < 1) return 'No resident information yet.';
  occupations.forEach(occ => {
    if (occ === 'Professional') {
      proCount++;
    } else {
      studCount++;
    }
  });
  if (proCount < 1) {
    return `Student House: ${studCount} students live here.`;
  }
  if (studCount < 1) {
    return `Professional House: ${proCount} professionals live here.`;
  }
  return `Mixed House: ${proCount} professionals and ${studCount} students live here.`;
};

export default flatmateDisplay;
