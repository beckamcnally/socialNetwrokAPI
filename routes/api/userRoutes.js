const router = require('express').Router();
const {
  addUser,
  getSingleUser,
  getUsers,
  updateUser,
  deleteUser,
  getAllUserFriends,
  addFriendToUser,
  deleteFriendFromUser
} = require('../../controllers/userController.js')

// /api/users
router.route('/')
  .get(getUsers)
  .post(addUser);

// /api/user/:id
router.route('/:id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/user/:id/friends
router.route('/:id/friends')
  .get(getAllUserFriends);

// /api/user/:id/friends/:friendID
router.route('/')
  .post(addFriendToUser)
  .delete(deleteFriendFromUser);