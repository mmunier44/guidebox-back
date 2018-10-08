const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  uuid: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    required: true
  },
  uploadAt: {
    type: String,
    required: true
  },
  converted: {
    type: Boolean,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Video', videoSchema)

// id: {
//   type: Number,
//   required: true
// },
