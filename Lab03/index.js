const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('./models/restaurant'); 
require('dotenv').config();
const app = express();
const port = 3000;


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    const restaurantsData = [
      {
        "address": {
          "building": "1008",
          "street": "Morris Park Ave",
          "zipcode": "10462"
        },
        "city": "Bronx",
        "cuisine": "Bakery",
        "name": "Morris Park Bake Shop",
        "restaurant_id": "30075445"
      },
      {
        "address": {
          "street": "Thai Son Street",
          "zipcode": null
        },
        "city": "Manhattan",
        "cuisine": "Vietnamese",
        "name": "Pho Me Long Time",
        "restaurant_id": "30075455"
      },
      {
        "address": {
          "building": "253",
          "street": "East 167 Street",
          "zipcode": null
        },
        "city": "Bronx",
        "cuisine": "Chicken",
        "name": "Mom's Fried Chicken",
        "restaurant_id": "40382900"
      },
      {
        "address": {
          "building": "120",
          "street": "East 56 Street",
          "zipcode": "19800"
        },
        "city": "Mahattan",
        "cuisine": "Italian",
        "name": "Montebello Restaurant",
        "restaurant_id": "40397082"
      },
      {
        "address": {
          "building": "195",
          "street": "Soprano Street",
          "zipcode": "17500"
        },
        "city": "Staten Island",
        "cuisine": "Hamburgers",
        "name": "Joeys Burgers",
        "restaurant_id": "40397555"
      },
      {
        "address": {
          "building": "200",
          "street": "Queens Boulevard",
          "zipcode": "19700"
        },
        "city": "Queens",
        "cuisine": "American",
        "name": "Brunos on the Boulevard",
        "restaurant_id": "40397678"
      },
      {
        "address": {
          "building": "555",
          "street": "Sushi Street",
          "zipcode": "17700"
        },
        "city": "Brooklyn",
        "cuisine": "Japanese",
        "name": "Iron Chef House",
        "restaurant_id": "40397699"
      },
      {
        "address": {
          "building": "555",
          "street": "Fontana Street",
          "zipcode": null
        },
        "city": "Brooklyn",
        "cuisine": "Japanese",
        "name": "Wasabi Sushi",
        "restaurant_id": "40398000"
      },
      {
        "address": {
          "building": "900",
          "street": "Goodfellas Street",
          "zipcode": "17788"
        },
        "city": "Brooklyn",
        "cuisine": "Delicatessen",
        "name": "Sal's Deli",
        "restaurant_id": "40898000"
      },
      {
        "address": {
          "building": "909",
          "street": "44 Gangster Way",
          "zipcode": "17988"
        },
        "city": "Queens",
        "cuisine": "Delicatessen",
        "name": "Big Tony's Sandwich Buffet",
        "restaurant_id": "40898554"
      },
      {
        "address": {
          "building": "1201",
          "street": "121 Canolli Way",
          "zipcode": "17989"
        },
        "city": "Queens",
        "cuisine": "Delicatessen",
        "name": "The Godfather Panini Express",
        "restaurant_id": "40898554"
      }
    ];
  
    // Restaurant.insertMany(restaurantsData)
    //   .then(() => {
    //     console.log('Restaurants added successfully');
    //     mongoose.connection.close();
    //   })
    //   .catch((err) => {
    //     console.error('Error inserting restaurants:', err);
    //   });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
  app.get('/restaurants', async (req, res) => {
    const { sortBy } = req.query;
    
    let sortOrder = 1;
    if (sortBy === 'DESC') {
      sortOrder = -1;
    }
    
    try {
      const restaurants = await Restaurant.find()
        .sort({ restaurant_id: sortOrder })
        .select('id cuisines name city restaurant_id');
  
      res.json(restaurants);
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Failed to fetch restaurants' });
    }
  });

app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    const { cuisine } = req.params;
    try {
      const restaurants = await Restaurant.find({ cuisine: cuisine });
      if (restaurants.length === 0) {
        return res.status(404).json({ error: 'No restaurants found for this cuisine' });
      }
      res.json(restaurants);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch restaurants by cuisine' });
    }
  });
  
  
  app.get('/restaurants/Delicatessen', async (req, res) => {
    try {
      const restaurants = await Restaurant.find({
        cuisines: 'Delicatessen',
        city: { $ne: 'Brooklyn' }
      })
      .sort({ name: 1 })
      .select('cuisines name city -_id');
      res.json(restaurants);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch restaurants' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});
