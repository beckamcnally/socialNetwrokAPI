const { Schema, model, mongoose} = require('mongoose');
// const emailType = require('mongoose-type-email');
const Thoughts = require('./Thoughts.js');

// mongoose.plugin(emailType);

const userSchema = new Schema(
  {
    userName:{
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
        type: String, //mongoose.SchemaTypes.Email, 
        required: true,
        unique: true
    },
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    },],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ]
  },
  {
    //for options
    toJson:{
      virtuals: true
    }, 
    id: false
  }
  );
  
  userSchema.virtual( `friendCount`).get(function (){
    return this.friends.length
  });

const Users = model('User', userSchema);

module.exports = Users