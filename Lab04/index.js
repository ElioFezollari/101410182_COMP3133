const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
require("dotenv").config();
const app = express();
const port = 8081;
app.use(express.json());
mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    const userData = [
      {
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031",
        website: "http://hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
      {
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618",
          },
        },
        phone: "1-901-692-6593",
        website: "https://anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains",
        },
      },
      {
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven",
          zipcode: "59590-4157",
          geo: {
            lat: "-68.6102",
            lng: "-47.0653",
          },
        },
        phone: "1-463-123-4447",
        website: "http://ramiro.info",
        company: {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications",
        },
      },
      {
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
          street: "Hoeger Mall",
          suite: "Apt. 692",
          city: "South Elvis",
          zipcode: "53919-4257",
          geo: {
            lat: "29.4572",
            lng: "-164.2990",
          },
        },
        phone: "1-493-170-9623",
        website: "https://kale.biz",
        company: {
          name: "Robel-Corkery",
          catchPhrase: "Multi-tiered zero tolerance productivity",
          bs: "transition cutting-edge web services",
        },
      },
      {
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
          street: "Skiles Walks",
          suite: "Suite 351",
          city: "Roscoeview",
          zipcode: "33263-1212",
          geo: {
            lat: "-31.8129",
            lng: "62.5342",
          },
        },
        phone: "1-254-954-1289",
        website: "http://demarco.info",
        company: {
          name: "Keebler LLC",
          catchPhrase: "User-centric fault-tolerant solution",
          bs: "revolutionize end-to-end systems",
        },
      },
      {
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        address: {
          street: "Norberto Crossing",
          suite: "Apt. 950",
          city: "South Christy",
          zipcode: "23505-1337",
          geo: {
            lat: "-71.4197",
            lng: "71.7478",
          },
        },
        phone: "1-477-935-8478",
        website: "http://ola.org",
        company: {
          name: "Considine-Lockman",
          catchPhrase: "Synchronised bottom-line interface",
          bs: "e-enable innovative applications",
        },
      },
      {
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        address: {
          street: "Rex Trail",
          suite: "Suite 280",
          city: "Howemouth",
          zipcode: "58804-1099",
          geo: {
            lat: "24.8918",
            lng: "21.8984",
          },
        },
        phone: "1-210-067-6132",
        website: "https://elvis.io",
        company: {
          name: "Johns Group",
          catchPhrase: "Configurable multimedia task-force",
          bs: "generate enterprise e-tailers",
        },
      },
      {
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        address: {
          street: "Ellsworth Summit",
          suite: "Suite 729",
          city: "Aliyaview",
          zipcode: "45169-3333",
          geo: {
            lat: "-14.3990",
            lng: "-120.7677",
          },
        },
        phone: "1-586-493-6943",
        website: "http://jacynthe.com",
        company: {
          name: "Abernathy Group",
          catchPhrase: "Implemented secondary concept",
          bs: "e-enable extensible e-tailers",
        },
      },
      {
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        address: {
          street: "Dayna Park",
          suite: "Suite 449",
          city: "Bartholomebury",
          zipcode: "76495-3109",
          geo: {
            lat: "24.6463",
            lng: "-168.8889",
          },
        },
        phone: "1-775-976-6794",
        website: "http://conrad.com",
        company: {
          name: "Yost and Sons",
          catchPhrase: "Switchable contextually-based project",
          bs: "aggregate real-time technologies",
        },
      },
      {
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232",
          },
        },
        phone: "1-924-648-3804",
        website: "http://ambrose.net",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models",
        },
      },
    ];

    // User.insertMany(userData)
    //   .then(() => {
    //     console.log('Users added successfully');
    //     mongoose.connection.close();
    //   })
    //   .catch((err) => {
    //     console.error('Error inserting users:', err);
    //   });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.post("/users", async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ message: "Please fill all of the required fields" });
    }

    const { username, email, address, website, phone } = req.body;

    const city = address.city || null;
    const zipCode = address.zipcode || null;



    const newUser = new User({
      username,
      email,
      city,
      website,
      zipCode,
      phone,
    });

    await newUser.save();

    return res.status(201).json({
      message: "User created successfully!",
      user: newUser,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: err.errors });
    }

    console.log(err);
    return res
      .status(500)
      .json({ message: "Error from the server", error: err });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
