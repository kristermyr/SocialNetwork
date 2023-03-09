// const { User, Thought } = require('../models');

// module.exports = {
//   // Get all thoughts
//   getAllThoughts(req, res) {
//     Thought.find()
//       .then((thoughtData) => res.json(thoughtData))
//       .catch((err) => res.status(500).json(err));
//   },
//   // Get a single thought
//   getSingleThought(req, res) {
//     Thought.findOne({ _id: req.params.id })
//       .select('-__v')
//       .then((thoughtData) =>
//         !thoughtData
//           ? res.status(404).json({ message: 'No thought with that ID' })
//           : res.json(thoughtData)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
//   // create a new user
//   createUser(req, res) {
//     User.create(req.body)
//       .then((user) => res.json(user))
//       .catch((err) => res.status(500).json(err));
//   },
//   // Delete a user and associated apps
//   deleteUser(req, res) {
//     User.findOneAndDelete({ _id: req.params.userId })
//       .then((user) =>
//         !user
//           ? res.status(404).json({ message: 'No user with that ID' })
//           : Thought.deleteMany({ _id: { $in: user.thoughts } })
//       )
//       .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
//       .catch((err) => res.status(500).json(err));
//   },
// };
