const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://shaikhabuhasim0_db_user:AtufaAnam5896@mangussdb5896.r5z0kxs.mongodb.net/?appName=mangussdb5896"

const connectToMongo = () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connected to Mongoose successfully!!");
        })
        .catch((err) => {
            console.log("Error connecting to Mongo:", err);
        });
}

module.exports = connectToMongo