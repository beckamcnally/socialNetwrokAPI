const {Users, Thoughts} = require('../moduels')

module.exports = {
  getAllThoughts (req, res) {
    Thoughts.find({})
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err))
  },

  getSingleThought (req, res) {
    Thoughts.findOne({_id: req.params.id})
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err))
  }, //GOOD

  addThought (req, res) {
    console.log(req.body.thoughtText)
    console.log(req.body.userId )
    Thoughts.create(req.body)
    .then((thought) => {
        console.log(thought)
        console.log(thought._id)
      return Users.findOneAndUpdate(
          {_id:req.body.userId },
          {$push: {thoughts: thought._id}},
          {new:true},
        )  
    })
    .then((thoughts) => res.json(thoughts))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
  }, //Good

  updateThought (req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err))
  }, //Good

  deleteThought (req, res) {
    Thoughts.findOneAndDelete({_id:req.params.id})
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err))
  }, //Good

  addReaction (req, res) {
    console.log(req.params)
    console.log(req.body)
    Thoughts.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
    .then((thoughts) => res.json(thoughts))
    .catch((err) => {
    console.log(err)
    res.status(500).json(err)
    })
  }, 

  deleteReaction (req, res) {
    Thoughts.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { reactions: {_id: req.body.reactionId } } },
      { runValidators: true, new: true }
    )
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err))
  },
}
