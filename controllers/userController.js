const {Users, Thoughts} = require('../moduels');

module.exports = {
  addUser (req, res) {
    console.log('hit addUser controller')
    Users.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  },

  getSingleUser (req, res) {
    console.log('git getSingleUSer controller')
    Users.findOne({_id:req.params.userId})
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  },

  getUsers (req, res) {
    console.log('hit getUser controller')
    Users.find({})    
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  },

  updateUser (req, res) {
    console.log('hit updateUser controller')
    console.log(req.body)
    Users.findOneAndUpdate({_id: req.params.userId})
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  },

  deleteUser (req, res) {
    console.log('hit deleteUser controller')
    console.log(req.params)
    console.log(req.body)
    Users.findOneAndRemove({_id:req.params.userId})
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  },


  addFriendToUser (req, res) {
    console.log('hit addFriendsToUser controller')
    console.log(req.body)
    Users.findOneAndUpdate(
      {_id: req.params.userId},
    ) //! this is going to be adding to an array of ids
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  },

  deleteFriendFromUser (req, res) {
    console.log('hit deleteFriendFromUser controller')
    Users.fidOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friends: { userId: req.params.userId } } },
    { runValidators: true, new: true }
    )
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  }

}