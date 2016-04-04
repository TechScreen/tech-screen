import React, {Component} from 'react';
import {connect} from 'react-redux';
import {executeCode, selectedLanguage, editorContents} from '../actions/index';
import {bindActionCreators} from 'redux';

class ExecuteCode extends Component {
  handleCodeSubmit(e) {
    e.preventDefault();
    console.log('in submit');
    this.props.executeCode(this.props.editorContents, this.props.selectedLanguage).bind(this);
  }

  render() {
    return (
      <div>
        <button className="btn waves-effect waves-light" type="submit" name="action" onSubmit={this.handleCodeSubmit}>Submit
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedLanguage: state.selectedLanguage,
    editorContents: state.editorContents,
    executeCode: state.executeCode,
  }
}

// Anything return from this function will end up as props on the
// AvailableQuestions container like mapStateToProps
function mapDispatchToProps(dispatch) {
  // Whenever select book is called, pass result to all reducers
  return bindActionCreators({
    executeCode: executeCode
  }, dispatch);
}

// Promote book from a component to a container - Make dispatch method
// selectBook available as prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExecuteCode);
