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

export const occupationArrayParser = (pCount, sCount) => {
  const occupations = [];
  for (let i = 0; i < pCount; i++) {
    occupations.push('Professional');
  }
  for (let i = 0; i < sCount; i++) {
    occupations.push('Student');
  }
  return occupations;
};

export const arrayCount = (gender, array) => {
  let count = 0;
  if (array) {
    array.forEach(g => {
      if (g === gender) {
        count++;
      }
    });
  }
  return count;
};

export const noPropertiesMessageGen = () => {
  const messages = [
    "Let's add some properties!",
    "Let's get the ball rolling!",
    'Try adding a new property.',
    "Let's get building!",
  ];
  const chosenMessage = messages[Math.floor(Math.random() * messages.length)];
  return chosenMessage;
};

export const rentShareCalc = managedProperties => {
  const totalRent = (
    managedProperties.price * (managedProperties.roomCount + managedProperties.occupantCount)
  );
  return totalRent / managedProperties.occupantCount;
};

export const arrayToString = arr => {
  let string = '';
  if (arr) {
    if (arr.length === 1) {
      return arr[0];
    }
    arr.forEach((word, i) => {
      if (i === arr.length - 1) {
        string += `${word}.`;
      } else {
        string += `${word}, `;
      }
    });
  }
  return string;
};
