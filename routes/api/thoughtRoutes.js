const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    
  } = require('../../controllers/thoughtController');
  
// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:id').get(getSingleThought).delete(deleteThought).put(updateThought);

router.route(":/thoughtId/reactions/:reactionId").post(createReaction)

module.exports = router;  