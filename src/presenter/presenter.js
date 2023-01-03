// Импорт view
// View
import ListFilterView from '../view/list-filter-view.js';
import ListSortView from '../view/list-sort-view.js';
import AddPointView from '../view/add-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import EventsListView from '../view/events-list-view.js';
import EventItemView from '../view/event-item-view.js';

// Импорт Утилиты
import { render } from '../render.js';


const tripFiltersContainerElement = document.querySelector(
  '.trip-controls__filters'
);

const tripEventsContainerElement = document.querySelector(
  'section.trip-events'
);

export default class TripPresenter {
  EventsListView = new EventsListView();

  init = () => {
    this.container = tripEventsContainerElement;

    render(new ListFilterView(), tripFiltersContainerElement);
    render(new ListSortView(), this.container);
    render(this.EventsListView, this.container);
    render(new EditPointView(), this.EventsListView.getElement());
    render(new AddPointView(), this.EventsListView.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventItemView(), this.EventsListView.getElement());
    }
  };
}
