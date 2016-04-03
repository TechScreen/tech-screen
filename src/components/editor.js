import React from 'react';
import { Component } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';




export default class Editor extends Component {
  render (
    <AceEditor mode="javascript" theme="github" name="SOME_NAME" />
  )
}
