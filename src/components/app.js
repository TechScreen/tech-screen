import React from 'react';
import { Component } from 'react';

import AvailableQuestionsList from '../containers/available_questions.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <AvailableQuestionsList />
      </div>
    );
  }
}
