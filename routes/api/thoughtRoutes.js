const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    deleteThought,
  } = require('../../controllers/thoughtController');
  
// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:id').get(getSingleThought).delete(deleteThought);

module.exports = router;