const mongoose = require('mongoose');

/**Defining DB Schema */
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('PostMessage', postSchema);

/** Exporting like below won't work*/ 
// PostMessage = mongoose.model('PostMessage', postSchema);
//module.exports  = {PostMessage};