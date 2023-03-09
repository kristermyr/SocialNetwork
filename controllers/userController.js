const { User } = require('../models');

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated apps
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Application.deleteMany({ _id: { $in: user.applications } }))
      .then(() => res.json({ message: 'User deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  // Adds a tag to an application. This method is unique in that we add the entire body of the tag rather than the ID with the mongodb $addToSet operator.
  addFriend(params, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { runValidators: true, new: true }
    )
      .then((friend) =>
        !friend
          ? res.status(404).json({ message: 'No friend with this id!' })
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove application tag. This method finds the application based on ID. It then updates the tags array associated with the app in question by removing it's tagId from the tags array.
  removeFriend(params, res) {
    User.findOneAndUpdate(
      { _id: params.userdId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((friend) =>
        !friend
          ? res.status(404).json({ message: 'No friend with this id!' })
          : res.json(friend)
      )
      .catch((err) => res.status(500).json(err));
  },
};




  
