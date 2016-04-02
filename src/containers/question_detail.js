import React, { Component } from 'react';
import { connect } from 'react-redux';


class QuestionDetail extends Component {
  render() {
    if (!this.props.question) {
      return <div>Select a question to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.question}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    question: state.activeQuestion
  };
}

export default connect(mapStateToProps)(QuestionDetail);