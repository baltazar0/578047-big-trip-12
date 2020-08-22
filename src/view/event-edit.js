import {firstToUpperCase} from '../utils/utils.js';
import {EVENT_TYPE_GROUP, eventTypeGroupMap, DESTINATION} from '../utils/const.js';
import {getEventInputTime} from '../utils/format-date.js';

const createInputTypeItemMarkup = (transfer) => {
  let markup = ``;
  for (let i = 0; i < transfer.length; i++) {
    let evtype = String(Object.keys(transfer[i]));
    markup += `<div class="event__type-item">
    <input id="event-type-${evtype}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${evtype}">
    <label class="event__type-label  event__type-label--${evtype}" for="event-type-${evtype}-1">${firstToUpperCase(evtype)}</label>
  </div>\n`;
  }
  return markup;
};

const creatTransferTypeGroupMarkup = (typeMap, type) => {
  let markup = ``;
  let action = Array.from(typeMap.keys());
  for (let i = 0; i < typeMap.size; i++) {
    markup += `<fieldset class="event__type-group">
      <legend class="visually-hidden">${action[i]}</legend>
      ${createInputTypeItemMarkup(type[action[i]])}
      </fieldset>`;
  }
  return markup;
};

const createPhotoListMarkup = (photosList) => {
  return photosList.map((photo, index) => {
    return `<img class="event__photo" src="${photo.src}" alt="${photo.alt}${index + 1}">`;
  })
    .join(`\n`);
};

const createOptionValueMarkup = (destinations) => {
  return destinations.map((destination) => {
    return `
    <option value="${destination}"></option>`;
  })
    .join(`\n`);
};

const createDestinationMarkup = (destination) => {
  const {description, photoPlace} = destination;
  return `
<section class="event__section  event__section--destination">
  <h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${description}</p>

  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${createPhotoListMarkup(photoPlace)}
    </div>
  </div>
</section>`;
};

const createOffersMarkup = (offers) => {
  return offers.map((offer) => {
    return `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
    <label class="event__offer-label" for="event-offer-meal-1">
      <span class="event__offer-title">${offer.title}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
    </label>
    </div>`;
  })
  .join(`\n`);
};

export const createEventEditTemplate = (event) => {
  const {typeIcon, destinationOptions, startTime, endTime, price, offers, title} = event;
  const destinations = DESTINATION;

  return (
    ` <form class="trip-events__item  event  event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${typeIcon}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
         ${creatTransferTypeGroupMarkup(eventTypeGroupMap, EVENT_TYPE_GROUP)}
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${title}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
        <datalist id="destination-list-1">
          ${createOptionValueMarkup(destinations)}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">
          From
        </label>
        // <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${getEventInputTime(startTime)}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">
          To
        </label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${getEventInputTime(endTime)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${createOffersMarkup(offers)}
        </div>
      </section>
      ${createDestinationMarkup(destinationOptions)}
    </section>
  </form>`
  );
};
