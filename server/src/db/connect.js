const mongoose = require("mongoose");


const db = 'mongodb+srv://reeco:reeco@cluster0.6kqp7oh.mongodb.net/reeco?retryWrites=true&w=majority'

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});
