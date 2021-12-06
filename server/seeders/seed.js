const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../.env") });
const db = require("../config/connection");
const { User, Pet } = require("../models");
const userSeeds = require("./userSeeds.json");
const petSeeds = require("./petSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Pet.deleteMany({});
    await Pet.create(petSeeds);

    for (let i = 0; i < userSeeds.length; i++) {
      const pets = await Pet.find({ firstName: userSeeds[i].pets }).select(
        "_id"
      );
      await User.create({ ...userSeeds[i], pets: pets.map((pet) => pet._id) });
    }

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
