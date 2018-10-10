const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  uuid: {
    type: Number,
    required: false
  },
  url: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  author: {
    type: String,
    required: false
  },
  views: {
    type: Number,
    required: false
  },
  uploadAt: {
    type: String,
    required: false
  },
  converted: {
    type: Boolean,
    required: false
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
