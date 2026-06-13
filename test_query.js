require('dotenv').config();
const mongoose = require('mongoose');
const Session = require('./models/Session');
const Message = require('./models/Message');

async function test() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected");
    const sessions = await Session.find().sort({ joinTime: -1 });
    console.log("Sessions:", sessions.length);
    const messages = await Message.find({ sessionId: "test-room" }).sort({ timestamp: 1 });
    console.log("Messages:", messages.length);
  } catch(e) {
    console.error("ERROR:", e);
  } finally {
    mongoose.disconnect();
  }
}
test();
