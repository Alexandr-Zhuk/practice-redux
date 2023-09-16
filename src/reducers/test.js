/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import update from 'react-addons-update';
import { 
  TEST_SET_DATA
} from './types';

// The initial state of the App
export const initialState = {
    data: '',
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case TEST_SET_DATA:
        return{ ...state, data: action.payload.data}
        //return update(state, {
        //  data: { $set: action.payload.data },
        //});
        break;
    }
    return state;
  };

export default reducer;
