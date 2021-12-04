const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../.env") });
const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');

console.log(userSeeds);

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
