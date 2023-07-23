import React from 'react';
import './FlashcardForm.css';

const FlashcardForm = ({ addFlashcard }) => {
  const [formData, setFormData] = React.useState({
    question: '',
    answer: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addFlashcard(formData);

    setFormData({
      question: '',
      answer: '',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='question-container hide' id='add-question-card'>
      <h2>Add a question</h2>
      <div className='wrapper'>
        <div className='error-con'>
          <span className='hide' id='error'>
            Input fields cannot be empty
          </span>
        </div>
        <i className='fa fa-times' aria-hidden='true'></i>
      </div>
      <br></br>
      <form id='question-form' onSubmit={handleSubmit}>
        <label htmlFor='question'>Question</label>
        <br></br>
        <textarea
          name='question'
          className='input'
          id='question'
          placeholder='Enter question'
          rows='2'
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor='answer'>Answer</label>
        <br></br>
        <textarea
          name='answer'
          className='input'
          id='answer'
          placeholder='Enter answer'
          rows='2'
          onChange={handleChange}
        />
        <button type='submit' className='btn' id='save-btn'>
          Save
        </button>
      </form>
    </div>
  );
};

export default FlashcardForm;
