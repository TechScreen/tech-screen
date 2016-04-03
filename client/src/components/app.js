import React from 'react';
import {connect} from 'react-redux';
import { Component } from 'react';
import {changeEditorContents} from '../actions';

import AvailableQuestionsList from '../containers/available_questions.js';
import QuestionDetail from '../containers/question_detail';
import AceEditor from 'react-ace';
// import Editor from '../components/editor';
import 'brace/mode/javascript';
import 'brace/theme/terminal';
import {bindActionCreators} from 'redux';

class App extends Component {
  render() {
    return (
      <div>
        <div id="editor">
          <AceEditor
            value={this.props.editorContents}
            onChange={(newEditorContents) => this.props.changeEditorContents(newEditorContents)}
            mode="javascript"
            width="100%"
            theme="terminal"
            name="SOME_NAME" />
        </div>
        <div id="prompt">
          <AvailableQuestionsList />
        </div>
        <QuestionDetail />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editorContents: state.editorContents,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeEditorContents: changeEditorContents,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
