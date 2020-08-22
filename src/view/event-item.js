import {getEventTime, getDurationFormat} from '../utils/format-date.js';

const createOffersTemplate = (offers) => {
  return offers ? offers.map((offer) => {
    const {title, price} = offer;
    return (
      `<li class="event__offer">
      <span class="event__offer-title">${title}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${price}</span>
    </li>`
    );
  }).join(`\n`) : ``;
};

export const createEventItemTemplate = (event) => {
  const {typeIcon, destinationOptions, startTime, endTime, duration, price, offers, title} = event;
  const {destination} = destinationOptions;

  const startTimeFormat = getEventTime(startTime);
  const endTimeFormat = getEventTime(endTime);
  const durationFormat = getDurationFormat(duration);
  return (
    ` <li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${typeIcon}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${title} ${destination}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${startTime}">${startTimeFormat}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">${endTimeFormat}</time>
        </p>
        <p class="event__duration">${durationFormat}</p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>

      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
      ${createOffersTemplate(offers)}
      </ul>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
};
