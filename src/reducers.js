import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

const initialStateSearch = {
  searchField: ''
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      //return Object.assign({}, state, {searchField: payload})
      return { ...state, searchField: payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: payload, isPending: false };
    default:
      return state;
  }
};
