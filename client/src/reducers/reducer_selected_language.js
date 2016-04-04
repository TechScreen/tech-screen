export default function(state = 'javascript', action) {
  switch (action.type) {
    case 'CHANGE_SELECTED_LANGUAGE':
      return action.selectedLanguage;
  }
  return state;
}
