// import {getInfoDateFormat} from '../utils/format-date.js';
import {createEventItemTemplate} from "./event-item.js";

const getEventsList = (events) => {
  const eventsListTemplate = events.map((event) => createEventItemTemplate(event)).join(``);

  return eventsListTemplate;
};

export const createDayTemplate = (date, count, dayEvents) => {
  const dateValue = dayEvents[0].startTime.toISOString().slice(0, -14);
  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${count}</span>
        <time class="day__date" datetime="2019-03-18${dateValue}">${date}</time>
      </div>
      <ul class="trip-events__list">
      ${getEventsList(dayEvents)}
      </ul>
    </li>`
  );
};
