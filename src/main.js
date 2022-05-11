import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import ListEmptyMessageView from './view/list-empty-message-view.js';
import LoadingMessageView from './view/loading-message-view.js';
import EventView from './view/event-view.js';
import EventFormView from './view/event-form-view.js';
import EventOffersView from './view/event-offers-view.js';
import EventDestinationView from './view/event-destination-view.js';
import EventDestinationPhotosView from './view/event-destination-photos-view.js';
import TripInfoView from './view/trip-info-view.js';
import {render, RenderPosition} from './render.js';
import {getElement} from './util.js';


const tripEventsElement = getElement('.trip-events');

render(new TripInfoView(), getElement('.trip-main'), RenderPosition.AFTERBEGIN);
render(new FiltersView(), getElement('.trip-controls__filters'));


// TODO отрисовываем когда нет сообщений
// render(new ListEmptyMessageView(), tripEventsElement);

// TODO отрисовываем при загрузке
// render(new LoadingMessageView(), tripEventsElement);

render(new EventView(), tripEventsElement);
render(new EventView(), tripEventsElement);
render(new EventView(), tripEventsElement);


render(new EventFormView(), tripEventsElement, RenderPosition.AFTERBEGIN);

render(new SortView(), tripEventsElement, RenderPosition.AFTERBEGIN);

const eventDetailsElement = getElement('.event__details');

render(new EventOffersView(), eventDetailsElement);

render(new EventDestinationView(), eventDetailsElement);

render(new EventDestinationPhotosView(), getElement('.event__section--destination'));
