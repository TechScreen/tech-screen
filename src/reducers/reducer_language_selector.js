export default function(state = ['javascript','ruby','python'], action) {
  switch (action.type) {
    case 'CHANGE_LANGUAGE_SELECTOR':
      return action.languageSelector;
  }
  return state;
}