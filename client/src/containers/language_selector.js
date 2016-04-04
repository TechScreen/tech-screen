import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSelectedLanguage } from '../actions/index';
import { bindActionCreators } from 'redux';

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        <select className="input-field col s12 browser-default" value={this.props.selectedLanguage} onChange={(event) => this.props.changeSelectedLanguage(event.target.value)}>
          <option name="Javascript" value="javascript">JavaScript</option>
          <option name="Python" value="python">Python</option>
          <option name="Ruby" value="ruby">Ruby</option>
          <option name="Java" value="java">Java</option>
          <option name="Golang" value="golang">Golang</option>
          <option name="Rust" value="rust">Rust</option>
          <option name="Clojure" value="clojure">Clojure</option>
          <option name="Scala" value="scala">Scala</option>
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
