import React from 'react';


function InputFields({ postType }) {
  return (
    <div className='main-body'>
      <h4 className="custom-heading">What do you want to ask or share: </h4>
      {postType === 'question' && (
        <div>
          <p> This section is designed based on the type of the post.</p>
          <div className="field tags">
            <label htmlFor='title'>Title:</label>
            <input type="text" placeholder="Start your question with how, what, why, etc." id='title' />
          </div>
          <div className="field">
            <label htmlFor='describe'>Describe your problem: </label>
            <textarea placeholder="" id='describe' />
          </div>
          <div className="field tags">
            <label htmlFor='tags'>Tags:</label>
            <input type="text" placeholder="Please add upto 3 tags to describe what your question is about e.g., Java" id='tags' />
          </div>
        </div>
      )}
      {postType === 'article' && (
        <div>
          <p> This section is designed based on the type of the post.</p>
          <div className="field tags">
            <label>Title:</label>
            <input type="text" placeholder="Enter a title" />
          </div>
          <div className="field tags">
            <label>Abstract:</label>
            <input type="text" placeholder="Enter a descriptive title" />
          </div>
          <div className="field">
            <label>Article Text:</label>
            <textarea placeholder="Enter your article text" />
          </div>
          <div className="field tags">
            <label>Tags:</label>
            <input type="text" placeholder="Please add upto 3 tags to describe what your article is about e.g., Java" />
          </div>
        </div>
      )}
    </div>
  );
}

export default InputFields;
