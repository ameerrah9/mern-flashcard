import React from 'react';
import './FlashcardForm.css';

const FlashcardForm = () => {
  return (
    <div className='question-container hide' id='add-question-card'>
      <h2>Add a question</h2>
      <div className='wrapper'>
        <div className='error-con'>
          <span className='hide' id='error'>
            Input fields cannot be empty
          </span>
        </div>
        <i class='fa fa-times' aria-hidden='true'></i>
      </div>
    </div>
  );
};

export default FlashcardForm;
