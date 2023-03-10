const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.id })
      .select('-__v')
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated apps
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.id })
      .then((thoughtData) 
      
           ? res.status(404).json({ message: 'No thought with that ID' })
           : User.findOneAndUpdate(
            {_id: body.userId},
            {$pull: {thoughts: params.id}},
            {new: true}
           )
        )
          
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};
