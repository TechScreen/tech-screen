import axios from 'axios';

export const EXECUTE_CODE = 'EXECUTE_CODE';
export const ROOT_URL = 'localhost:3000';

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
  return {
    type: 'CHANGE_SELECTED_LANGUAGE',
    selectedLanguage: language,
  }
}

export function executeCode(code, language) {
  const url = `${ROOT_URL}/code/execute`;
  const request = axios.post(url, {
      codeToExecute: code,
      language: language,
    })
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
  });

  return {
    type: EXECUTE_CODE,
    payload: request,
  }
}
