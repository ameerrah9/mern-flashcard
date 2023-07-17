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
      <form id='question-form'>
        <div className='form-group'>
          <label htmlFor='question'>Question</label>
          <textarea
            name='question'
            className='input'
            id='question'
            placeholder='Enter question'
            rows='3'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='answer'>Answer</label>
          <textarea
            name='answer'
            className='input'
            id='answer'
            placeholder='Enter answer'
            rows='3'
          />
        </div>
        <button type='submit' className='btn' id='save-btn'>
          Save
        </button>
      </form>
    </div>
  );
};

export default FlashcardForm;
