import { combineReducers } from 'redux';
import AvailableQuestionsReducer from './reducer_available_questions';
import ActiveQuestion from './reducer_active_question';

const rootReducer = combineReducers({
  availableQuestions: AvailableQuestionsReducer,
  activeQuestion: ActiveQuestion
});

export default rootReducer;
