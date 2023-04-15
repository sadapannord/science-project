const db = require('../config/connection');
const { User, Project } = require('../models');
const bcrypt = require("bcrypt");

const userData = require("./userData.json");
const projectData = require('./projectData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Project.deleteMany({});//insert many needs done

  const users = userData.map((data) => {
  const hashedPassword = bcrypt.hashSync(data.password, 10);
   
  return new User({ email: data.email, username: data.username, password: hashedPassword });
  })
  
  await User.insertMany(users);

// for (let i = 0; i < projectData.length; i++) {
//   const {_id} = await Project.create(projectData[i]);
//   const user = await User.findOneAndUpdate(
//     {username: _id},
//     {
//       $addToSet: {
//         projects: _id,
//       }
//     }
//   )
// };

  console.log('Seeding Complete!');
  process.exit(0);
});
