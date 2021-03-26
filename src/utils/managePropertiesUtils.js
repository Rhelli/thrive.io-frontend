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

export const monthlyEarnings = managedProperties => {
  if (managedProperties.length > 0) {
    let total = 0;
    managedProperties.forEach(property => {
      const singlePropRent = (property.price * property.occupantCount);
      total += singlePropRent;
    });
    return total;
  }
  return false;
};

export const availableRooms = managedProperties => {
  if (managedProperties.length > 0) {
    let total = 0;
    managedProperties.forEach(property => {
      const emptyRooms = freeRoomCalc(property.occupantCount, property.roomCount);
      total += emptyRooms;
    });
    return total;
  }
  return false;
};

export const genderArrayParser = (mCount, fCount, tCount, oCount) => {
  const genders = [];
  for (let i = 0; i < mCount; i++) {
    genders.push('Male');
  }
  for (let i = 0; i < fCount; i++) {
    genders.push('Female');
  }
  for (let i = 0; i < tCount; i++) {
    genders.push('Transgender');
  }
  for (let i = 0; i < oCount; i++) {
    genders.push('Other');
  }
  return genders;
};
