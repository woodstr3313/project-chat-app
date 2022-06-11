const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.envDB_USER}:${process.envDB_PW}@cluster0.9yjrr.mongodb.net/ProjectChat?retryWrites=true&w=majority`,()=>{
    console.log('connected to mongodb')
})
