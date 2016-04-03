import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedLanguage } from '../actions/index';
import { bindActionCreators } from 'redux';

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        <select className="input-field col s12 browser-default" value={this.props.selectedLanguage} onChange={(event) => this.props.changeSelectedLanguage(event.target.value)}>
          <option name="Javascript" value="JavaScript">JavaScript</option>
          <option name="Python" value="Python">Python</option>
          <option name="Ruby" value="Ruby">Ruby</option>
          <option name="Java" value="Java">Java</option>
          <option name="Golang" value="Golang">Golang</option>
          <option name="Rust" value="Rust">Rust</option>
          <option name="Clojure" value="Clojure">Clojure</option>
          <option name="Scala" value="Scala">Scala</option>
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedLanguage: state.selectedLanguage,
  }
}

// Anything return from this function will end up as props on the
// AvailableQuestions container like mapStateToProps
function mapDispatchToProps(dispatch) {
  // Whenever select book is called, pass result to all reducers
  return bindActionCreators({
    changeSelectedLanguage: changeSelectedLanguage
  }, dispatch);
}

// Promote book from a component to a container - Make dispatch method
// selectBook available as prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelector);