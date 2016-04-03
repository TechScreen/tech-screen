import { combineReducers } from 'redux';
import AvailableQuestionsReducer from './reducer_available_questions';
import ActiveQuestion from './reducer_active_question';
import activeAvailableQuestionReducer from './reducer_active_available_question';

const rootReducer = combineReducers({
  availableQuestions: AvailableQuestionsReducer,
  activeAvailableQuestion: activeAvailableQuestionReducer,
  activeQuestion: ActiveQuestion
});

export default rootReducer;
