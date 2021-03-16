import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVenus, faTransgender, faTransgenderAlt, faMars,
} from '@fortawesome/free-solid-svg-icons';

export const userGenderDisplay = gender => {
  const gen = [null, null];
  if (gender === 'Female') {
    gen[0] = <FontAwesomeIcon icon={faVenus} />;
    gen[1] = 'Female';
  } else if (gender === 'Male') {
    gen[0] = <FontAwesomeIcon icon={faMars} />;
    gen[1] = 'Male';
  } else if (gender === 'Transgender') {
    gen[0] = <FontAwesomeIcon icon={faTransgender} />;
    gen[1] = 'Trans';
  } else if (gender === 'Other') {
    gen[0] = <FontAwesomeIcon icon={faTransgenderAlt} />;
    gen[1] = 'Other';
  } else {
    gen[1] = 'No gender yet.';
  }
  return gen;
};

export const arrayDisplay = array => {
  let string = '';
  array.forEach((pet, i) => {
    if (!array[i + 1]) {
      string = string.concat(`${pet}.`);
    } else {
      string = string.concat(`${pet}, `);
    }
  });
  return string;
};
