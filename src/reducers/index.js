import { combineReducers } from 'redux';

const reducer = (state = []) => {
  return state;
}

const rootReducer = combineReducers({ game: reducer });

export default rootReducer;
