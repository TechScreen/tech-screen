import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectQuestion} from '../actions/index';
import {bindActionCreators} from 'redux';

class AvailableQuestionsList extends Component {
  renderQuestions() {
    return this.props.availableQuestions.map((question) => {
      return (
        <li 
          key={question}
          onClick={() => this.props.selectQuestion(question)}
          className="list-group-item">
          {question}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm4">
        {this.renderQuestions()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    availableQuestions: state.availableQuestions,
  }
}

// Anything return from this function will end up as props on the
// AvailableQuestions container like mapStateToProps
function mapDispatchToProps(dispatch) {
  // Whenever select book is called, pass result to all reducers
  return bindActionCreators({selectQuestion: selectQuestion}, dispatch);
}

// Promote book from a component to a container - Make dispatch method
// selectBook available as prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableQuestionsList);
