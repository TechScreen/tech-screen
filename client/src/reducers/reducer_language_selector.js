export default function(state = 'JavaScript', action) {
  switch (action.type) {
    case 'CHANGE_SELECTED_LANGUAGE':
      return action.selectedLanguage;
  }
  return state;
}