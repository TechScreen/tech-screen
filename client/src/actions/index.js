import axios from 'axios';

export const EXECUTE_CODE = 'EXECUTE_CODE';
export const ROOT_URL = 'http://localhost:3000';

import {Map} from 'immutable';

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

const languageToHackerEarthMap = Map({
  javascript:   'JAVASCRIPT',
  python:       'PYTHON',
  golang:       'GO',
  php:          'PHP',
  ruby:         'RUBY',
  rust:         'RUST',
  scala:        'SCALA',
  java:         'JAVA',
  clojure:      'CLOJURE',
  haskell:      'HASKELL',
  perl:         'PERK',
  r:            'R'
})

function getHackerEarthLanguageName(language) {
  const hackerEarthLanguage = languageToHackerEarthMap.get(language);
  return hackerEarthLanguage ? hackerEarthLanguage : language;
}

export function executeCode(code, language) {
  const url = `${ROOT_URL}/code/execute`;
  const request = axios.post(url, {
      codeToExecute: code,
      language: getHackerEarthLanguageName(language),
    });

  return {
    type: EXECUTE_CODE,
    payload: request,
  }
}
