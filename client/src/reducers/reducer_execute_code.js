import {EXECUTE_CODE} from '../actions/index';

export default function(state = 'hi', action) {
  switch (action.type) {
    case EXECUTE_CODE:
      console.log(action.payload);
      alert(action.payload.data);
      return action.payload;
  }
  return state;
}
