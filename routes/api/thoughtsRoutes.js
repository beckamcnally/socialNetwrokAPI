const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtsController');


// /api/thoughts
router.route('/')
  .get(getAllThoughts)
  .post(addThought)

// /api/thoughts/:id
router.route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)


// /api/thoughts/:id/reactions
router.route('/:id/reactions')
  .post(addReaction)
  .delete(deleteReaction)

  module.exports = router;
