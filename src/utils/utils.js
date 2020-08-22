export const firstToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);


export const sortTripDays = (eventArr) => {

  return eventArr.slice().sort((a, b) => a.startTime - b.startTime);
};
