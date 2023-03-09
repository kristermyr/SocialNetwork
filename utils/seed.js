const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.once('open', async () => {
    console.log('connected');
    await User.deleteMany({});
    await Thought.deleteMany({});
    let users = [ 
        {
        username: " user1",
        email: "username1@gmail.com"
    },
    {
        username: " user2",
        email: "username2@gmail.com"
    },
    {
        username: " user3",
        email: "username3@gmail.com",
    },
        
    ];
    
    let thoughts = [ 
        {
        username: " user1",
        thoughtText: " I dont like thinking"
    },
    {
        username: " user2",
        thoughtText: " I like thinking"
    },
    {
        username: " user3",
        thoughtText: " I might like thinking"
    }
        
    ];
    
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.log('seed complete')
    process.exit(0);
});

