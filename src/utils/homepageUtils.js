const timeOfDayGreeting = () => {
  const today = new Date();
  const currentHour = today.getHours();
  let message = '';
  if (currentHour < 12) {
    message = 'Good Morning';
  } else if (currentHour < 18) {
    message = 'Good Afternoon';
  } else {
    message = 'Good Evening';
  }
  return message;
};

export default timeOfDayGreeting;
