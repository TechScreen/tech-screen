export default function(state = 0, action) {
  switch (action.type) {
    case 'CHANGE_ACTIVE_AVAILABLE_QUESTION':
      return action.activeAvailableQuestionIndex;
  }

  return state;
}
