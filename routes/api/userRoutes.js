const router = require('express').Router();

const {
  getAllUsers,
  getSingleUser,
  updateUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

router.route('/:userId').delete(deleteUser);
router.route('/:userId').put(updateUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);
module.exports = router;
