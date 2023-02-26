const {Users, Thoughts} = require('../moduels');

module.exports = {
  addUser (req, res) {
    Users.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  }, //GOOD 

  getSingleUser (req, res) {
    Users.findOne({_id:req.params.id})
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  }, //GOOD //!solve get all and will work right

  getUsers (req, res) {
    console.log('hit getUser controller')
    Users.find({})    
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  }, //! friends and thoughts array empty 

  updateUser (req, res) {
    console.log('hit updateUser controller')
    console.log(req.params.id)
    Users.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  }, //GOOD

  deleteUser (req, res) {
    Users.findOneAndRemove({_id:req.params.id})
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  }, //GOOD

  addFriendToUser (req, res) {
    console.log('hit addFriendsToUser controller')
    console.log(req.body)
    Users.findOneAndUpdate(
      {_id: req.params.userId},
    ) //! this is going to be adding to an array of ids
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  }, //! not adding -- returns user wanting to be added

  deleteFriendFromUser (req, res) {
    console.log('hit deleteFriendFromUser controller')
    Users.fidOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friends: { userId: req.params.userId } } },
    { runValidators: true, new: true }
    )
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  } //! haven't tested due to no friends lol

}