export default function(state = "Lets write some code!", action) {
  switch (action.type) {
    case 'CHANGE_EDITOR_CONTENTS':
      return action.editorContents;
  }
  return state;
}
