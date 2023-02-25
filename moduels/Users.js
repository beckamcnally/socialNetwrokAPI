const { Schema, model} = require('mongoose');
require('mongoose-type-email');
const thoughtsSchema = require('./Thoughts.js');


const userSchema = new Schema(
  {
    userName:{
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      userEmail: {
        type: mongoose.SchemaTypes.Email, 
        required: true,
        unique: true
      }
    },
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    },], //? friends
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