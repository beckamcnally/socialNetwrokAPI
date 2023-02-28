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
  }, //GOOD 

  getUsers (req, res) {
    console.log('hit getUser controller')
    Users.find({})    
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  }, //! thoughts array empty 

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
    .then((users) => {
      !users 
          ? res.status(404).json({ message: "No user with that ID" }) 
          : Thoughts.deleteMany({
              _id: { $in: users.thoughts },
          })
          res.status(200).json({message: "Success"});
  })
    .catch((err) => res.status(500).json(err))
  }, //GOOD

  addFriendToUser (req, res) {
    console.log('hit addFriendsToUser controller')
    console.log(req.params)
    Users.findOneAndUpdate(
      {_id: req.params.id},
      { $push: { friends: req.params.friendsId } },
      { runValidators: true, new: true }
    )
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  }, 

  deleteFriendFromUser (req, res) {
    console.log('hit deleteFriendFromUser controller')
    Users.findOneAndUpdate(
      { _id: req.params.userId },
    { $pull: { friends: { userId: req.params.userId } } },
    { runValidators: true, new: true }
    )
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err))
  } //! null

}