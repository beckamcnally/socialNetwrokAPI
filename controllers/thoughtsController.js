const {Users, Thoughts} = require('../moduels')

module.exports = {
  getAllThoughts (req, res) {
    Thoughts.find({})
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err))
  },  //! reaction array empty .. not understanding __v .... is this where I am supposed to add the formattedCreatedAt because it does not show up as formatted in the response on Insomnia

  getSingleThought (req, res) {
    Thoughts.findOne({_id: req.params.id})
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err))
  }, //GOOD //!minus same as get all

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
      { runValidators: true, new: true }
    )
    .then((thoughts) => res.json(thoughts))
    .catch((err) => {
    console.log(err)
    res.status(500).json(err)
    })
  }, //! returns the thought  -- and doesn't show on the MongooseDB Compass

  deleteReaction (req, res) {
    console.log('hit deleteReaction controller')
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reaction: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err))
  },
} //! can't test delete reaction because I don't have a id for it??
