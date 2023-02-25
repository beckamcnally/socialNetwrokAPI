const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
  allReactions4SingleThought
} = require('../../controllers/thoughtsController');


// /api/thoughts
router.route('/')
  console.log('thoughtsRoutes')
  .get(getAllThoughts)
  .post(addThought)

// /api/thoughts/:id
router.route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)

// /api/thoughts/:id/reactions
router.route('/:id/reactions')
  .get(allReactions4SingleThought);

// /api/thoughts/:id/reactions/:reactionID
router.route('/:id/reactions/:reactionId')
  .post(addReaction)
  .delete(deleteReaction)
