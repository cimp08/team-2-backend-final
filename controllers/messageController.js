const Messages = require("../models/Message");

const getMessages = async (req, res) => {
  //   const { userId, correspondingUserId } = req.query;
  const userId = req.query.userId;
  const correspondingUserId = req.query.correspondingUserId;
  try {
    const query = {
      fromUserId: userId,
      toUserId: correspondingUserId,
    };

    const foundMessages = await Messages.find(query);
    res.send(foundMessages);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMessages,
};
