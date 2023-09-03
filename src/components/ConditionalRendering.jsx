import React, { useState } from 'react';
import InputFields from './InputFields';
import TypeSelection from './TypeSelection'; // Import the updated TypeSelection component
import './ConditionalRendering.css';

function ConditionalRendering() {
  const [postType, setPostType] = useState('question'); // Default to 'question'

  const handleTypeChange = (event) => {
    setPostType(event.target.value);
  };

  return (
    <div className="ui form">
      <div className="field">
        <h4 className="custom-heading">New Post</h4>
      </div>
      {/* Use the TypeSelection component */}
      <TypeSelection postType={postType} handleTypeChange={handleTypeChange} />

      <InputFields postType={postType} />
    </div>
  );
}

export default ConditionalRendering;
