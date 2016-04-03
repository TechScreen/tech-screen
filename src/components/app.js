import React from 'react';
import { Component } from 'react';

import AvailableQuestionsList from '../containers/available_questions.js';
import QuestionDetail from '../containers/question_detail';
import AceEditor from 'react-ace';
// import Editor from '../components/editor';
import 'brace/mode/javascript';
import 'brace/theme/terminal';

export default class App extends Component {
  render() {
    return (
      <div>
        <div id="editor">
          <AceEditor mode="javascript" width="100%" theme="terminal" name="SOME_NAME" />
        </div>
        <div id="prompt">
          <AvailableQuestionsList />
        </div>
        <QuestionDetail />
      </div>
    );
  }
}
