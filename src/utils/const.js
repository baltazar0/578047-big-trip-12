export const EVENT_TYPE_GROUP = {
  transfer: [{
    'taxi': [`Upgrade to business class`, `Choose a radio station`, `Order Uber`, `Talk to a driver`],
  }, {
    'bus': [`Book tickets`, `Switch to comfort seats`, `Air conditioner`, `Include TV`],
  }, {
    'train': [`Book tickets`, `Comfort class`, `Include meals`, `Include TV`, `Include shower`],
  }, {
    'ship': [`Book tickets`, `First class`, `Free alcohol`, `Сaptain's cabin visit`, `One time honk`],
  }, {
    'transport': [`Book tickets`, `Porter service`, `Taxi to station`, `Include meals`],
  }, {
    'drive': [`Fuel`, `Toll highway`, `Meals`, `Rent a car`],
  }, {
    'flight': [`Add luggage`, `Switch to comfort class`, `Add meal`, `Choose seats`, `Travel by train`],
  }],
  activity: [{
    'check-in': [`Add breakfast`, `King bed`, `Add meal`, `Switch to lux`, `Bar`],
  }, {
    'sightseeing': [`Book tickets`, `Lunch in a city`, `Photosession`, `Guide services`],
  }, {
    'restaurant': [`Smorgasbord`, `Fish menu`, `Meat menu`, `Vegetarian menu`],
  }]
};

export const eventTypeGroupMap = new Map(Object.entries(EVENT_TYPE_GROUP));

export const DESTINATION = [`Amsterdam`, `Geneva`, `Chamonix`, `Saint Petersburg`, `Barnaul`, `Budapest`, `Prague`, `Minsk`, `Paris`, `Berlin`, `Vienna`, `Rome`, `Madrid`, `Warszawa`, `Zagreb`];

export const DESTINATION_DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

export const MinCount = {
  DESCRIPTION_COUNT: 1,
  IMG_COUNT: 1,
  OFFER_COUNT: 0,
  PRICE: 1,
  OFFER_PRICE: 30,
};

export const MaxCount = {
  DESCRIPTION_COUNT: 5,
  IMG_COUNT: 6,
  OFFER_COUNT: 5,
  PRICE: 80,
  OFFER_PRICE: 300,
  DAYS_GAP: 7,
};
