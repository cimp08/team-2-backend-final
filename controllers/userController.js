const User = require("../models/User");

const updateProfile = async (req, res) => {
  const formData = req.body.formData;

  const query = { _id: formData.userId };

  const updateDocument = {
    $set: {
      dogName: formData.dogName,
      breed: formData.breed,
      gender: formData.gender,
      genderInterest: formData.genderInterest,
      age: formData.age,
      url: formData.url,
      about: formData.about,
      matches: formData.matches,
    },
  };
  const insertedUser = await User.updateOne(query, updateDocument);
  res.json(insertedUser);
};

const getUser = async (req, res) => {
  const userId = req.query.userId;
  try {
    const query = { _id: userId };
    const user = await User.findOne(query);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const getGenderedUsers = async (req, res) => {
  const gender = req.query.gender;

  if (gender === "everyone") {
    const query = { gender: { $in: ["he", "she"] } };
    const allUsers = await User.find(query);
    res.send(allUsers);
  } else {
    try {
      const query = { gender: { $eq: gender } };
      const foundUsers = await User.find(query);

      res.send(foundUsers);
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = { updateProfile, getUser, getGenderedUsers };
