const { Schema, model } = require('mongoose');
const reactionsSchema = require('./Reactions')
const { format } = require('date-fns');


const thoughtsSchema = new Schema (
  {
    thoughtText:{
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt:{
      type: Date,
      default: Date.now,
    },
    username: { //?(The user that created this thought)
      type: String,
      required: true,
    },
    reactions: [reactionsSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

reactionsSchema.virtual('formattedCreatedAt').get(function() {
  return format(this.createdAt, 'MM/dd/yyyy HH:mm')
});

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts