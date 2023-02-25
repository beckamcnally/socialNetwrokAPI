// const {Users, Thoughts} = require('../modules')

module.exports = {
  getAllThoughts (req, res) {
 console.log('hit getAllThoughts controller')
  },
  getSingleThought (req, res) {
    console.log('hit getSingleThought controller')
  },
  addThought (req, res) {
    console.log('hit addThought controller')
  },
  updateThought (req, res) {
    console.log('hit updateThought controller')
  },
  deleteThought (req, res) {
    console.log('hit deleteThought controller')
  },
  addReaction (req, res) {
    console.log('hit addReaction controller')
  },
  deleteReaction (req, res) {
    console.log('hit deleteReaction controller')
  },
  allReactions4SingleThought (req, res) {
    console.log('hit allReactions4SingleThought controller')
  }
}