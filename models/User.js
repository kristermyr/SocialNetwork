const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true, 
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/],
      },
      thoughts: [{
       type: Schema.Types.ObjectId,
       ref: "Thought",
       
      },],
      friends: [{
        type: Schema.Types.ObjectId,
       ref: "Friends"

      }]
      
    },
    {
      toJSON: {
        virtuals: true,
      },
    }
  );
  //22-ins_Virtuals
userSchema.virtual('friendCount').
get(function() { return this.friends.length
});

  const Student = model('user', userSchema);
  
  module.exports = User;