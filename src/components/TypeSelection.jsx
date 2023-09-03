import React from 'react';

function TypeSelection({ postType, handleTypeChange }) {
  return (
    <div className="field select">
      <label>Select Post Type:</label>
      <div className="ui radio checkbox">
        <input
          id='questions'
          type="radio"
          name="postType"
          value="question"
          checked={postType === 'question'}
          onChange={handleTypeChange}
        />
        <label htmlFor='questions'>Question</label>
      </div>
      <div className="ui radio checkbox">
        <input
          id='article'
          type="radio"
          name="postType"
          value="article"
          checked={postType === 'article'}
          onChange={handleTypeChange}
        />
        <label htmlFor='article'>Article</label>
      </div>
    </div>
  );
}

export default TypeSelection;
