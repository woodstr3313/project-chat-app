const mongoose = require('mongoose');
require('dotenv').config();

module.exports = mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.9yjrr.mongodb.net/project_chat?retryWrites=true&w=majority`);
