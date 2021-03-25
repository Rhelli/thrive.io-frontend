export const freeRoomCalc = (occupantCount, roomCount) => {
  if (occupantCount === 0) {
    return roomCount;
  }
  return roomCount - occupantCount;
};

export const occupationShorthand = occupations => {
  let pCount = 0; let sCount = 0; let ans = '';
  occupations.forEach(occ => {
    if (occ === 'Professional') {
      pCount++;
    } else {
      sCount++;
    }
  });
  if (pCount === sCount) {
    ans = 'Mixed';
  }
  if (pCount > sCount) {
    ans = 'Professional';
  }
  if (sCount > pCount) {
    ans = 'Student';
  }
  return ans;
};
