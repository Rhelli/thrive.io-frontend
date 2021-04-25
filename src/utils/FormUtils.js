import getAge from 'get-age';

const formValidator = (data, dataName) => {
  const nameRegex = /^[a-zA-Z ,.'-]+$/;
  const emailRegex = /^[\w+\-.]+@[a-z\d\-.]+\.[a-z]+$/i;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let errorMessage = '';

  switch (dataName) {
    case 'name': {
      if (data && !nameRegex.test(data)) {
        errorMessage = 'Name is invalid. Please ensure it does not contain numbers or unusual symbols.';
      }

      return errorMessage;
    }

    case 'email': {
      if (data && !emailRegex.test(data)) {
        errorMessage = 'Email is invalid. Please check your email before continuing.';
      }
      return errorMessage;
    }

    case 'dob': {
      if (data && getAge(data) < 18) {
        errorMessage = 'You must be 18 years old to register.';
      }
      if (data && getAge(data) > 125) {
        errorMessage = 'Please enter a valid age. Unless you are really over 125 years old. In that case, congratulations. I guess...';
      }

      return errorMessage;
    }

    case 'password': {
      if (!passwordRegex.test(data)) {
        errorMessage = 'Your password must be 8 characters long, containing letters and numbers.';
      }

      return errorMessage;
    }

    case 'userType': {
      if (!data) {
        errorMessage = 'Please select a user type.';
      }

      return errorMessage;
    }

    case 'advertiserType': {
      if (!data) {
        errorMessage = 'Please select your advertising category type';
      }
      return errorMessage;
    }

    case 'about': {
      if (data && data.length > 5000) {
        errorMessage = 'The maximum amount of characters is 5000.';
      }
      return errorMessage;
    }

    case 'areasLooking': {
      if (data && !nameRegex.test(data)) {
        errorMessage = 'Please enter a valid location name.';
      }
      return errorMessage;
    }

    default: return errorMessage;
  }
};

export default formValidator;
