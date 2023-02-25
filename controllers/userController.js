// const {Users, Thoughts} = require('../modules');

module.exports = {
  addUser (req, res) {
    console.log('hit addUser controller')
  },
  getSingleUser (req, res) {
    console.log('git getSingleUSer controller')
    res.send('getSingleUSer')
  },
  getUsers (req, res) {
    console.log('hit getUser controller')
  },
  updateUser (req, res) {
    console.log('hit updateUser controller')
  },
  deleteUser (req, res) {
    console.log('hit deleteUser controller')
  },
  getAllUserFriends (req, res) {
    console.log('hit getAllUserFriends Controller')
  },
  addFriendToUser (req, res) {
    console.log('hit addFriendsToUser controller')
  },
  deleteFriendFromUser (req, res) {
    console.log('hit deleteFriendFromUser controller')
  }

}