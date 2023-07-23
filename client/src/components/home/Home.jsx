import React from 'react';
import FlashcardList from '../flashcardlist/FlashcardList';
import FlashcardForm from '../flashcardform/FlashcardForm';

const Home = () => {
  const [flashcardData, setFlashcardData] = React.useState([]);
  const flashcards = [
    {
      id: 1,
      question: 'What is 2 + 2?',
      answer: '4',
      options: ['2', '3', '4', '5'],
    },
    {
      id: 2,
      question: 'Question 2?',
      answer: 'Answer',
      options: ['Answer', 'Answer 2', 'Answer 3', 'Answer 4'],
    },
  ];

  const addFlashcard = (flashcard) => {
    console.log(flashcard);

    const id = Math.floor(Math.random() * 10000) + 1;

    const newFlashcard = { id, ...flashcard };

    setFlashcards([...flashcards, newFlashcard]);
  };

  return (
    <>
      {/* <FlashcardForm addFlashcard={addFlashcard} /> */}
      <FlashcardList flashcards={flashcards} />
    </>
  );
};

export default Home;
