import {createInfoTemplate} from "./view/info.js";
import {createRouteTemplate} from "./view/route.js";
import {createCostTemplate} from "./view/cost.js";
import {createTabsTemplate} from "./view/tabs.js";
import {createFiltersTemplate} from "./view/filters.js";
import {createSortTemplate} from "./view/sort.js";
import {createEventEditTemplate} from "./view/event-edit.js";
import {createDaysTemplate} from "./view/days.js";
import {createDayTemplate} from "./view/day.js";
// import {createEventItemTemplate} from "./view/event-item.js";
import {generateEvent} from "./mock/event.js";
import {getInfoDateFormat} from "./utils/format-date.js";
import {sortTripDays} from "./utils/utils.js";

const EVENTS_COUNT = 10;
const event = generateEvent();
const events = new Array(EVENTS_COUNT).fill().map(generateEvent);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const pageHeaderElement = document.querySelector(`.page-header`);

const tripMainElement = pageHeaderElement.querySelector(`.trip-main`);

render(tripMainElement, createInfoTemplate(), `afterbegin`);

const tripInfoElement = tripMainElement.querySelector(`.trip-info`);

render(tripInfoElement, createRouteTemplate(), `beforeend`);
render(tripInfoElement, createCostTemplate(), `beforeend`);

const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripControlsTitleElement = tripControlsElement.querySelector(`.trip-controls h2`);

render(tripControlsTitleElement, createTabsTemplate(), `afterend`);
render(tripControlsElement, createFiltersTemplate(), `beforeend`);

const pageMainElement = document.querySelector(`.page-main`);
const tripEventsElement = pageMainElement.querySelector(`.trip-events`);

render(tripEventsElement, createSortTemplate(), `beforeend`);
render(tripEventsElement, createEventEditTemplate(event), `beforeend`);
render(tripEventsElement, createDaysTemplate(), `beforeend`);

const tripDaysElement = tripEventsElement.querySelector(`.trip-days`);

const infoDatesGroup = new Set(sortTripDays(events).map((item) => getInfoDateFormat(item.startTime)));

const groupByDay = (allEvents, criteria) => {
  const dayGroup = {};
  const dayEvents = [];
  allEvents.map((item) => {
    if (getInfoDateFormat(item.startTime) === criteria) {

      dayEvents.push(item);
    }
    dayGroup[criteria] = dayEvents;
  });

  return dayGroup;
};

const groupByDays = (dates) => {
  let groups = [];
  for (let date of dates) {
    groups.push(groupByDay(events, date));
  }
  return groups;
};

groupByDays(infoDatesGroup).forEach((item, i) => {
  let date = Object.keys(item)[0];

  let eventsDay = Object.values(item)[0];
  // console.log(Object.values(item)[0])
  render(tripDaysElement, createDayTemplate(date, i + 1, eventsDay), `beforeend`);
});
