import {EXECUTE_CODE} from '../actions/index';

export default function(state = '', action) {
  switch (action.type) {
    case EXECUTE_CODE:
      return action.payload;
  }
  return state;
}