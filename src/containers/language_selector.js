import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLanguageSelector } from '../actions/index';
import { bindActionCreators } from 'redux';

class LanguageSelector extends Component {
  render() {
    // if (!this.props.languageSelector) {
    //   return <div>Select a language to get started.</div>
    // }
    return (
      <div>
        <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>
        <ul id='dropdown1' className='dropdown-content'>
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    languageSelector: state.languageSelector,
  }
}

// Anything return from this function will end up as props on the
// AvailableQuestions container like mapStateToProps
function mapDispatchToProps(dispatch) {
  // Whenever select book is called, pass result to all reducers
  return bindActionCreators({
    changeLanguageSelector: changeLanguageSelector
  }, dispatch);
}

// Promote book from a component to a container - Make dispatch method
// selectBook available as prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelector);