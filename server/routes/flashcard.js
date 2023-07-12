const express = require('express');
const router = express.Router();
const {
  createFlashcard,
  getFlashcards,
  getFlashcard,
  updateFlashcard,
  deleteFlashcard,
} = require('../controllers/flashcardController');
const auth = require('../utils/auth');

// User Create Flashcard
router.route('/').post(createFlashcard);

// Get all Flashcards
router.route('/').get(getFlashcards);

// Get one Flashcard
router.route('/:id').get(getFlashcard);

// Update Flashcard
router.route('/:id').put(auth, updateFlashcard);

// Delete Flashcard
router.route('/:id').delete(auth, deleteFlashcard);

module.exports = router;
