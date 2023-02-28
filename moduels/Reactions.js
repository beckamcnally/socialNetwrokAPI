const { Schema, model } = require('mongoose');
const { format } = require('date-fns');

const reactionsSchema = new Schema (
  {
    reactionId:{
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    }, 
    reactionBody:{
      type: String,
      required: true,
      maxLength: 280,
    },
    userName:{
      type: String,
      required: true,
    },
    createdAt:{
      type: Date,
      default: Date.now,
  }
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


module.exports = reactionsSchema