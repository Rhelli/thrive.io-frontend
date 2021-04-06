export const timeOfDayGreeting = () => {
  const today = new Date();
  const currentHour = today.getHours();
  let message = '';
  if (currentHour < 12) {
    message = 'Good Morning,';
  } else if (currentHour < 18) {
    message = 'Good Afternoon,';
  } else {
    message = 'Good Evening,';
  }
  return message;
};

export const totalRooms = properties => {
  let totalRooms = 0;
  if (properties) {
    properties.forEach(property => {
      totalRooms += (property.roomCount + property.occupantCount);
    });
  }
  return totalRooms;
};

export const totalFilledRooms = properties => {
  let totalFilledRooms = 0;
  if (properties) {
    properties.forEach(property => {
      totalFilledRooms += property.occupantCount;
    });
  }
  return totalFilledRooms;
};

export const totalSpareRooms = properties => {
  let totalSpareRooms = 0;
  if (properties) {
    properties.forEach(property => {
      totalSpareRooms += property.roomCount;
    });
  }
  return totalSpareRooms;
};

export const missingRent = properties => {
  let totalMissingRent = 0;
  if (properties) {
    properties.forEach(property => {
      totalMissingRent += property.roomCount * property.price;
    });
  }
  return totalMissingRent;
};

// export const totalLikes = properties => {
//   let totalLikes = 0;
//   if (properties) {
//     properties.forEach(property => {
//       totalLikes += property.userLikes.length;
//     });
//   }
//   return totalLikes;
// };
