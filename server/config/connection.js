const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/techmatchup', {
  // mongoose.connect("mongodb+srv://amandapaul1223:Cl!mber2008@cluster0.xmvkizb.mongodb.net/techmatchup", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;



