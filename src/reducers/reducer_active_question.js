// All reducers get two args, current state and action
// Only called when an action occurs
// State arg is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
  case 'QUESTION_SELECTED':
    return action.payload;
  }

  return state;
}

