const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://naveen_skr:NvnSkr99@cluster0.9nwa3v3.mongodb.net/rapidFood?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected");

    const fetched_data = await mongoose.connection.db.collection('food_items');
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection('foodCategory');
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = mongoDB;



