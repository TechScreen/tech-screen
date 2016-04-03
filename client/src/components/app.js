import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { changeEditorContents } from '../actions';

import AvailableQuestionsList from '../containers/available_questions.js';
import QuestionDetail from '../containers/question_detail';
import LanguageSelector from '../containers/language_selector';
import AceEditor from 'react-ace';
// import Editor from '../components/editor';
// TODO add import statements for modes to support
// import 'brace/mode/javascript';
// import 'brace/mode/python';
// import 'brace/mode/ruby';
// import 'brace/mode/java';

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
            // TODO mode needs to be filled in from props and state,
            // javascript ruby python java c
            // when an action occurs which changes lanugage in drop down then we should update props to set mode to that language, update state, to update props, to update mode
            
            mode={this.props.languageSelector}
            width="100%"
            theme="terminal"
            name="SOME_NAME" />
        </div>
        <div id="prompt">
          <AvailableQuestionsList />
        </div>
        <QuestionDetail />
        <LanguageSelector />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editorContents: state.editorContents,
    // Update state for mode
    languageSelector: state.languageSelector,
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
