const Flashcard = require('../models/Flashcard');

const createFlashcard = async (req, res, next) => {
  const { user_id, question, answer } = req.body;

  if (!user_id || !question || !answer) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const flashcard = new Flashcard({ user_id, question, answer });
    await flashcard.save();
    res.send(flashcard);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getFlashcards = async (req, res, next) => {
  try {
    const flashcards = await Flashcard.find();
    res.send(flashcards);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getFlashcard = async (req, res, next) => {
  const { id } = req.params;

  try {
    const flashcard = await Flashcard.findById(id);
    res.send(flashcard);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateFlashcard = async (req, res, next) => {
  const { id } = req.params;
  const { question, answer } = req.body;

  try {
    const flashcard = await Flashcard.findById(id);
    flashcard.question = question;
    flashcard.answer = answer;
    await flashcard.save();
    res.send(flashcard);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteFlashcard = async (req, res, next) => {
  const { id } = req.params;
  try {
    const flashcard = await Flashcard.findById(id);
    await flashcard.delete();
    res.send(flashcard);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createFlashcard,
  getFlashcards,
  getFlashcard,
  updateFlashcard,
  deleteFlashcard,
};
