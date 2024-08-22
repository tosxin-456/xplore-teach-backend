require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URL;

const connectToDb = async (req,res)=>{
    mongoose.connect(uri).then(
        console.log('connected to the database, successfully.')
    )
}

module.exports = connectToDb