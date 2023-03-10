const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        
      },
      thoughts: {
       type: Schema.Types.ObjectId,
       ref: "Thought",
       
      },
      username: {
        type: String,
        required: true,

      },
    //   reactions: {
    //     type: String,
    //     required: true,
    //   },
    //   reactions: [ReactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id:false,
    }
  );
  //22-ins_Virtuals
// thoughtSchema.virtual('friendCount').
// get(function() { return this.friends.length
// });

  const Thought = model('Thought', ThoughtSchema);
  
  module.exports = Thought;