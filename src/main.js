import {createInfoTemplate} from "./view/info.js";
import {createRouteTemplate} from "./view/route.js";
import {createCostTemplate} from "./view/cost.js";
import {createTabsTemplate} from "./view/tabs.js";
import {createFiltersTemplate} from "./view/filters.js";
import {createSortTemplate} from "./view/sort.js";
import {createEventEditTemplate} from "./view/event-edit.js";
import {createDaysTemplate} from "./view/days.js";
import {createDayTemplate} from "./view/day.js";
import {createDayInfoTemplate} from "./view/day-info.js";
import {createDayEventsListTemplate} from "./view/day-events-list.js";
import {createEventItemTemplate} from "./view/day-event-item.js";

const EVENTS_COUNT = 3;

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
render(tripEventsElement, createEventEditTemplate(), `beforeend`);
render(tripEventsElement, createDaysTemplate(), `beforeend`);

const tripDaysElement = tripEventsElement.querySelector(`.trip-days`);


render(tripDaysElement, createDayTemplate(), `beforeend`);

const dayElement = tripEventsElement.querySelector(`.day`);

render(dayElement, createDayInfoTemplate(), `beforeend`);
render(dayElement, createDayEventsListTemplate(), `beforeend`);

const tripEventsList = dayElement.querySelector(`.trip-events__list`);

for (let i = 0; i < EVENTS_COUNT; i++) {
  render(tripEventsList, createEventItemTemplate(), `beforeend`);
}
