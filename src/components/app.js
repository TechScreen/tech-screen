import React from 'react';
import { Component } from 'react';

import AvailableQuestionsList from '../containers/available_questions.js';
import QuestionDetail from '../containers/question_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <AvailableQuestionsList />
        <QuestionDetail />
      </div>
    );
  }
}
