import React, { useState } from 'react';
import TypeSelection from './components/TypeSelection';
import InputFields from './components/InputFields';
import ConditionalRendering from './components/ConditionalRendering';
import PostButton from './components/PostButton';
import './app.css';

function App() {
  return (
    <div className='main'>
      <ConditionalRendering />
      <PostButton />
    </div>
  );
}

export default App;