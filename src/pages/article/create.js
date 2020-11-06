import React from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../../constEditor.js';

class EditArticle extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <EditorJs
          tools={EDITOR_JS_TOOLS}
          data={{
            time: 1556098174501,
            blocks: [],
            version: '2.12.4',
          }}
        />
      </div>
    );
  }
}

export default EditArticle;
