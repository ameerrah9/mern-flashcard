import React from 'react';

const Flashcard = ({ flashcard }) => {
  return (
    <>
      <div>
        <div className='container'></div>
        <div>{flashcard.question}</div>
        <div>{flashcard.answer}</div>
      </div>
    </>
  );
};

export default Flashcard;
