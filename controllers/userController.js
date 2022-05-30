const User = require("../models/User");

const updateProfile = async (req, res) => {
  const formData = req.body.formData;

  const query = { userId: formData.userId };

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

module.exports = { updateProfile };
