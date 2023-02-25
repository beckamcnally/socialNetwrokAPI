const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reactions')

const thoughtsSchema = new Schema (
  {
    thoughtText:{
      //   * String
      //   * Required
      //   * Must be between 1 and 280 characters
    },
    createdAt:{
      //   * Date
      //   * Set default value to the current timestamp
      //   * Use a getter method to format the timestamp on query
    },
    username: { //?(The user that created this thought)
      //   * String
      //   * Required
    },
    reactions: [reactionsSchema]
  },
  {
  }
);

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts