export const flatmateDisplay = occupations => {
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

export const gendersDisplay = genders => {
  let mCount = 0; let tCount = 0; let fCount = 0; let oCount = 0;
  let message = ''; let icon;
  if (genders.length < 1) {
    return ['No flatmate gender information yet.', null];
  }
  genders.forEach(gen => {
    if (gen === 'Male') mCount++;
    if (gen === 'Transgender') tCount++;
    if (gen === 'Female') fCount++;
    if (gen === 'Other') oCount++;
  });
  if ((tCount + fCount + oCount) === 0) {
    message = `Male Household. ${mCount} male flatmates`;
    icon = 'faMars';
  } else if ((mCount + fCount + oCount) === 0) {
    message = `Trans Household. ${tCount} trans flatmates`;
    icon = 'faTransgender';
  } else if ((mCount + tCount + oCount) === 0) {
    message = `Female Household. ${fCount} female flatmates`;
    icon = 'faVenus';
  } else if ((mCount + tCount + fCount) === 0) {
    message = `Other Gender Household. ${oCount} other gendered flatmates`;
    icon = 'faTransgenderAlt';
  } else {
    if (mCount) message.concat(`${mCount} men, `);
    if (fCount) message.concat(`${fCount} women, `);
    if (tCount) message.concat(`${tCount} trans, `);
    if (oCount) message.concat(`${oCount} other`);
  }
  return [message, icon];
};
