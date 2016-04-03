import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectQuestion, changeActiveAvailableQuestion} from '../actions/index';
import {bindActionCreators} from 'redux';

class AvailableQuestionsList extends Component {
  renderQuestion(question) {
      return (
        <li
          key={question}
          onClick={() => this.props.selectQuestion(question)}
          className="list-group-item">
          {question}
        </li>
      );
  }

  nextAvailableQuestion() {
    if (this.props.activeAvailableQuestion < this.props.availableQuestions.length - 1) {
      this.props.changeActiveAvailableQuestion(
        this.props.activeAvailableQuestion + 1
      )
    }
  }

  previousAvailableQuestion() {
    if (this.props.activeAvailableQuestion > 0) {
      this.props.changeActiveAvailableQuestion(
        this.props.activeAvailableQuestion - 1
      )
    }
  }

  render() {
    return (
      <div className="row">
          <div className="card-panel teal">
            <span onClick={() => this.previousAvailableQuestion()}>
              Previous
            </span>
            <span className="white-text">
            {this.renderQuestion(this.props.availableQuestions.get(this.props.activeAvailableQuestion))}
            </span>
            <span onClick={() => this.nextAvailableQuestion()}>
              Next
            </span>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    availableQuestions: state.availableQuestions,
    activeAvailableQuestion: state.activeAvailableQuestion,
  }
}

// Anything return from this function will end up as props on the
// AvailableQuestions container like mapStateToProps
function mapDispatchToProps(dispatch) {
  // Whenever select book is called, pass result to all reducers
  return bindActionCreators({
    selectQuestion: selectQuestion,
    changeActiveAvailableQuestion: changeActiveAvailableQuestion,
  }, dispatch);
}

// Promote book from a component to a container - Make dispatch method
// selectBook available as prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableQuestionsList);
