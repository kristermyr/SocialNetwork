const { Schema, model } = require('mongoose');
const dateFormerter = require("../utils/fomatDate");

const reactionSchema = new Schema({

    reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
    },
    
    reactionBody: {
    type: String,
    required: true,
    maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormerter(timestamp)
    },

})

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
        get: timestamp => dateFormerter(timestamp)
        
      },
      thoughts: {
       type: Schema.Types.ObjectId,
       ref: "Thought",
       
      },
      username: {
        type: String,
        required: true,

      },
      reactions: {
        type: String,
        required: true,
      },
     reactions: [reactionSchema],
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
reactionSchema.virtual('reactionCount').
get(function() { return this.reactions.length
});


  const Thought = model('Thought', ThoughtSchema);
  
  module.exports = Thought;