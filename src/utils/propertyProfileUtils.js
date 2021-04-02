import {
  faMars, faVenus, faTransgender, faTransgenderAlt,
} from '@fortawesome/free-solid-svg-icons';

export const flatmateDisplay = occupations => {
  let proCount = 0; let studCount = 0; let message = '';
  if (occupations) {
    if (occupations.length < 1) message = 'No resident information yet.';
    occupations.forEach(occ => {
      if (occ === 'Professional') {
        proCount++;
      } else {
        studCount++;
      }
    });
    if (proCount === 0) {
      message = 'Student House';
    } else if (studCount === 0) {
      message = 'Professional House';
    } else if (proCount > studCount) {
      message = 'Mostly Professional House';
    } else if (proCount < studCount) {
      message = 'Mostly Student House';
    } else if (proCount === studCount) {
      message = 'Mixed Student & Professional House';
    }
  }
  return message;
};

const mixedHouseParse = arr => {
  let string = 'Mixed Household: ';
  if (arr) {
    arr.forEach((num, i) => {
      if (num === 0) {
        string += '';
      } else if (i === 0) {
        if (num > 1) string += `${num} Men · `;
        if (num === 1) string += `${num} Man · `;
      } else if (i === 1) {
        if (num > 1) string += `${num} Women · `;
        if (num === 1) string += `${num} Woman · `;
      } else if (i === 2) {
        string += `${num} Trans · `;
      } else if (i === 3) {
        string += `${num} Other · `;
      }
    });
    string = string.split('');
    string.splice(-3);
    string = string.join('');
  }
  return string;
};

export const gendersDisplay = genders => {
  let mCount = 0; let tCount = 0; let fCount = 0; let oCount = 0;
  let message = ''; let icon;
  if (genders) {
    if (genders.length < 1) {
      return ['No flatmate gender information yet.', null];
    }
    for (let i = 0; i < genders.length; i++) {
      if (genders[i] === 'Male') mCount++;
      if (genders[i] === 'Transgender') tCount++;
      if (genders[i] === 'Female') fCount++;
      if (genders[i] === 'Other') oCount++;
    }

    if ((tCount + fCount + oCount) === 0) {
      message = `Male Household. ${mCount} male flatmates`;
      icon = faMars;
    } else if ((mCount + fCount + oCount) === 0) {
      message = `Trans Household. ${tCount} trans flatmates`;
      icon = faTransgender;
    } else if ((mCount + tCount + oCount) === 0) {
      message = `Female Household. ${fCount} female flatmates`;
      icon = faVenus;
    } else if ((mCount + tCount + fCount) === 0) {
      message = `Other Gender Household. ${oCount} other gendered flatmates`;
      icon = faTransgenderAlt;
    } else {
      message = mixedHouseParse([mCount, fCount, tCount, oCount]);
    }
  }
  return [message, icon];
};

export const settingsShortlistButtonDetect = (properties, propertyId) => {
  let ans = false;
  if (properties && propertyId) {
    properties.forEach(property => {
      if (property.id === propertyId) {
        ans = true;
      }
    });
  }
  return ans;
};

export const shortlistedPropertyIdGen = properties => {
  const arr = [];
  if (properties) {
    properties.forEach(property => {
      arr.push(property.id);
    });
  }
  return arr;
};
