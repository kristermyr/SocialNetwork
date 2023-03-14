const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction,
    
  } = require('../../controllers/thoughtController');
  
// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route("/:id/").get(getSingleThought).delete(deleteThought).put(updateThought);

router.route("/:id/reactions").post(createReaction);
router.route("/:id/reactions/:reactionId").delete(deleteReaction);

module.exports = router;  