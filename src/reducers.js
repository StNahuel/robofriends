import { CHANGE_SEARCHFIELD } from './constants';

const initialState = {
  searchField: ''
};

export const searchRobots = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SEARCHFIELD:
      //return Object.assign({}, state, {searchField: payload})
      return { ...state, searchField: payload };
    default:
      return state;
  }
};
