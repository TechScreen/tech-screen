export function selectQuestion(question) {
  // SelectQuestion is an ActionCreator, it must return an action with a type property
  // Each action has a type (required and describes purpose of action) and a payload (optional data that describes action)
  return {
    type: 'QUESTION_SELECTED',
    payload: question
  };
}

export function changeActiveAvailableQuestion(questionIndex) {
  return {
    type: 'CHANGE_ACTIVE_AVAILABLE_QUESTION',
    activeAvailableQuestionIndex: questionIndex,
  }
}

export function changeEditorContents(newEditorContents) {
  return {
    type: 'CHANGE_EDITOR_CONTENTS',
    editorContents: newEditorContents,
  }
}

export function changeSelectedLanguage(language) {
  console.log('in changelangague: ', language);
  return {
    type: 'CHANGE_LANGUAGE_SELECTED',
    selectedLanguage: language,
  }
}
