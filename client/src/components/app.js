import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { changeEditorContents } from '../actions';
import { bindActionCreators } from 'redux';
import AceEditor from 'react-ace';

import AvailableQuestionsList from '../containers/available_questions.js';
import QuestionDetail from '../containers/question_detail';
import LanguageSelector from '../containers/language_selector';
import ExecuteCode from '../containers/execute_code';

import 'brace/mode/javascript';
import 'brace/mode/python';
import 'brace/mode/ruby';
import 'brace/mode/java';
import 'brace/mode/golang';
import 'brace/mode/rust';
import 'brace/mode/clojure';
import 'brace/mode/scala';
import 'brace/theme/terminal';

class App extends Component {
  render() {
    return (
      <div>
        <div id="editor">
          <AceEditor
            value={this.props.editorContents}
            onChange={(newEditorContents) => this.props.changeEditorContents(newEditorContents)}
            // TODO mode needs to be filled in from props and state,
            // javascript ruby python java c
            // when an action occurs which changes lanugage in drop down then we should update props to set mode to that language, update state, to update props, to update mode

            mode={this.props.selectedLanguage}
            width="100%"
            theme="terminal"
            name="SOME_NAME" />
        </div>
        <div id="prompt">
          <AvailableQuestionsList />
        </div>
        <QuestionDetail />
        <LanguageSelector />
        <ExecuteCode />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editorContents: state.editorContents,
    // Update state for mode
    selectedLanguage: state.selectedLanguage,
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
