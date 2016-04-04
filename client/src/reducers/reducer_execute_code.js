import {EXECUTE_CODE} from '../actions/index';

export default function(state = 'hi', action) {
  switch (action.type) {
    case EXECUTE_CODE:
      console.log("Code executed, payload: ", action.payload);
      return action.payload;
  }
  return state;
}
