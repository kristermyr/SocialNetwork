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


   // Update a thought
   updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.id })
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : Thought.findOneAndUpdate (
      { thoughts: req.params.id},      
      { $pull:{thoughts:req.params.id} },
      { new: true }
    )
        )
        .then((User) =>
        !User
            ? res.status(404).json({
                message: "thought deleted, but no user found",
            })
            :res.json({ message:"Thought has been deleted!"})
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
        
        },
};
