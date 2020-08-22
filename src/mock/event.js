import {getRandomInteger, getRandomQuantityElements, getRandomArrayItem} from '../utils/random.js';
// import {getStartDate, getEndDate, getDuration, getRouteTime} from '../utils/format-date.js';
import {firstToUpperCase} from '../utils/utils.js';
import {EVENT_TYPE_GROUP, DESTINATION, DESTINATION_DESCRIPTIONS, MinCount, MaxCount} from '../utils/const.js';

const EventsTypesArray = EVENT_TYPE_GROUP.transfer.concat(EVENT_TYPE_GROUP.activity);

const generatePlaceholderEvent = () => {
  const eventsType = {};
  EVENT_TYPE_GROUP.transfer.forEach((elem) => {
    eventsType[String(Object.keys(elem))] = String(Object.keys(elem)) + ` to`;
  });
  EVENT_TYPE_GROUP.activity.forEach((elem) => {
    eventsType[String(Object.keys(elem))] = String(Object.keys(elem)) + ` in`;
  });

  return eventsType;
};

const getDestinationImages = (count) => {
  return new Array(count).fill(``).map(() => ({
    src: `http://picsum.photos/248/152?r=${Math.random()}`,
    alt: `Event photo`,
  }));
};

const getDestination = () => {
  const description = getRandomQuantityElements(DESTINATION_DESCRIPTIONS, MinCount.DESCRIPTION_COUNT, MaxCount.DESCRIPTION_COUNT).join(` `);

  const destination = getRandomArrayItem(DESTINATION);

  const photoPlace = getDestinationImages(getRandomInteger(MinCount.IMG_COUNT, MaxCount.IMG_COUNT));
  return {
    destination,
    description,
    photoPlace,
  };
};

const getOfferOptionsArray = (offers) => {
  return offers.map((item) => ({
    title: item,
    price: getRandomInteger(MinCount.OFFER_PRICE, MaxCount.OFFER_PRICE)
  }));
};

const getStartDate = (maxDaysGap) => {
  const startDate = new Date();
  const daysGap = getRandomInteger(0, maxDaysGap);
  const diffValueHoures = getRandomInteger(0, 24);
  const diffMinutesValue = getRandomInteger(0, 59);

  startDate.setDate(startDate.getDate() + daysGap);
  startDate.setHours(diffValueHoures, diffMinutesValue);
  return startDate;
};

const getEndDate = (startDate) => {
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + getRandomInteger(1, 4));
  endDate.setMinutes(endDate.getMinutes() + getRandomInteger(0, 59));
  return endDate;
};

export const generateEvent = () => {
  const eventType = getRandomArrayItem(EventsTypesArray);
  const typeIcon = String(Object.keys(eventType));
  const offersArr = String(Object.values(eventType)).split(`,`);
  const offersAndPriceAll = getOfferOptionsArray(offersArr);
  // const offersAndPriceCurrent = getOfferOptionsArray(getRandomQuantityElements(offersArr, 0, offersArr.length));
  const destinationOptions = getDestination();
  const startTime = getStartDate(MaxCount.DAYS_GAP);
  const endTime = getEndDate(startTime);
  const duration = endTime - startTime;
  const price = getRandomInteger(MinCount.PRICE, MaxCount.PRICE) * 10;
  const title = firstToUpperCase(generatePlaceholderEvent()[typeIcon]);

  return {
    typeIcon,
    destinationOptions,
    startTime,
    endTime,
    duration,
    price,
    offers: offersAndPriceAll,
    title,
  };
};
