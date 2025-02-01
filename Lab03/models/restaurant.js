const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  restaurant_id: {
    type: String,
    required: true,
  },
  address: {
    building: {
      type: String,
      required: false
    },
    street: {
      type: String,
      required: true
    },
    zipcode: {
      type: String,
      required: false
    }
  }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
