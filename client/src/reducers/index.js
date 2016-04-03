import { combineReducers } from 'redux';
import availableQuestionsReducer from './reducer_available_questions';
import activeQuestionReducer from './reducer_active_question';
import activeAvailableQuestionReducer from './reducer_active_available_question';
import editorContentsReducer from './reducer_editor_contents';
import languageSelectorReducer from './reducer_language_selector';

const rootReducer = combineReducers({
  availableQuestions: availableQuestionsReducer,
  activeAvailableQuestion: activeAvailableQuestionReducer,
  activeQuestion: activeQuestionReducer,
  editorContents: editorContentsReducer,
  languageSelector: languageSelectorReducer,
});

export default rootReducer;
