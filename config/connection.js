const mongoose = require("mongoose");
//28-stu_mini-project
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/Social_Network", {

  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
