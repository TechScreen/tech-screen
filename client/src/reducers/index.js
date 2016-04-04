import { combineReducers } from 'redux';
import availableQuestionsReducer from './reducer_available_questions';
import activeQuestionReducer from './reducer_active_question';
import activeAvailableQuestionReducer from './reducer_active_available_question';
import editorContentsReducer from './reducer_editor_contents';
import languageSelectorReducer from './reducer_language_selector';
import executeCodeReducer from './reducer_execute_code';

const rootReducer = combineReducers({
  availableQuestions: availableQuestionsReducer,
  activeAvailableQuestion: activeAvailableQuestionReducer,
  activeQuestion: activeQuestionReducer,
  editorContents: editorContentsReducer,
  selectedLanguage: languageSelectorReducer,
  executeCode: executeCodeReducer,
});

export default rootReducer;
