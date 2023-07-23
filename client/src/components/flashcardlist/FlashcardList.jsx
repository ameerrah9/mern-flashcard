import React from 'react';
import Flashcard from '../flashcard/Flashcard';

const FlashcardList = ({ flashcards }) => {
  const flashcardComponents = flashcards.map((flashcard) => {
    return <Flashcard flashcard={flashcard} key={flashcard.id} />;
  });

  return (
    <div id='card-con'>
      <div id='card-list-container'>
        <h1>Flashcards</h1>
        <div id='card-list'>{flashcardComponents}</div>
      </div>
    </div>
  );
};

export default FlashcardList;
