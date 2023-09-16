/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import pageReducer from './page';
import testReducer from './test';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    page: pageReducer,
    test: testReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
