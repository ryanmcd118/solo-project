const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://ryanmcdaniel:admin@cluster0.mg5pj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'calendar',
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const calendarSchema = new Schema({
  unitDay: String,
  topic: String,
});

const Day = mongoose.model('day', calendarSchema);

module.exports = {
  Day,
}