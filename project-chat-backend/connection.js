const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.9yjrr.mongodb.net/ProjectChat?retryWrites=true&w=majority`,()=>{
    console.log('connected to mongodb')
})