const mongoose = require("mongoose");

/**Defining DB Schema */
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("PostMessage", postSchema);

/** Exporting like below won't work*/
// PostMessage = mongoose.model('PostMessage', postSchema);
//module.exports  = {PostMessage};
