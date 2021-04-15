import getAge from 'get-age';

const formValidator = (data, dataName) => {
  const nameRegex = /^[a-zA-Z ,.'-]+$/;
  const emailRegex = /^[\w+\-.]+@[a-z\d\-.]+\.[a-z]+$/i;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let errorMessage = '';

  switch (dataName) {
    case 'name': {
      if (!nameRegex.test(data)) {
        errorMessage = 'Name is invalid. Please ensure it does not contain numbers or unusual symbols.';
      }
      if (!data) {
        errorMessage = 'Please enter a name.';
      }

      return errorMessage;
    }

    case 'email': {
      if (!emailRegex.test(data)) {
        errorMessage = 'Email is invalid. Please check your email before continuing.';
      }
      if (!data) {
        errorMessage = 'Please enter your email.';
      }
      return errorMessage;
    }

    case 'dob': {
      if (!data) {
        errorMessage = 'Please enter your date of birth.';
      }
      if (getAge(data) < 18) {
        errorMessage = 'You must be 18 years old to register.';
      }
      if (getAge(data) > 125) {
        errorMessage = 'Please enter a valid age. Unless you are really over 125 years old. In that case, congratulations. I guess...';
      }

      return errorMessage;
    }

    case 'password': {
      if (!data) {
        errorMessage = 'Please enter a password.';
      }
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

    default: return errorMessage;
  }
};

export default formValidator;
