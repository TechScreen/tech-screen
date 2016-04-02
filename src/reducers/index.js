import { combineReducers } from 'redux';
import AvailableQuestionsReducer from './reducer_available_questions';

const rootReducer = combineReducers({
  availableQuestions: AvailableQuestionsReducer,
  activeQuestion: "What is your name?"
});

export default rootReducer;
