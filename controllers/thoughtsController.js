const {Users, Thoughts} = require('../moduels')

module.exports = {
  getAllThoughts (req, res) {
 console.log('hit getAllThoughts controller')
 Thoughts.find({})
 .then((Thoughts) => res.json(useThoughtsrs))
 .catch((err) => res.status(500).json(err))
  },

  getSingleThought (req, res) {
    console.log('hit getSingleThought controller')
    Thoughts.findOne({_id: req.params.courseId})
    .then((Thoughts) => res.json(Thoughts))
    .catch((err) => res.status(500).json(err))
  },

  addThought (req, res) {
    console.log('hit addThought controller')
    Thoughts.create(req.body)
    .then((Thoughts) => res.json(Thoughts))
    .catch((err) => res.status(500).json(err))
  },

  updateThought (req, res) {
    console.log('hit updateThought controller')
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    .then((Thoughts) => res.json(Thoughts))
    .catch((err) => res.status(500).json(err))
  },

  deleteThought (req, res) {
    console.log('hit deleteThought controller')
    Thoughts.findOneAndDelete({_id:req.params/thoughtId})
    .then((Thoughts) => res.json(Thoughts))
    .catch((err) => res.status(500).json(err))
  },

  addReaction (req, res) {
    console.log('hit addReaction controller')
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reaction: req.body } },
      { runValidators: true, new: true }
    )
    .then((Thoughts) => res.json(Thoughts))
    .catch((err) => res.status(500).json(err))
  },

  deleteReaction (req, res) {
    console.log('hit deleteReaction controller')
    Thought.findOneAndUpdate(
      { _id: req.params.ThoughtId },
      { $pull: { reaction: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
    .then((Thoughts) => res.json(Thoughts))
    .catch((err) => res.status(500).json(err))
  },
}
