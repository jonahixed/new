const mongoose = require("mongoose");

async function dbConfig() {
    try{
        await mongoose.connect("mongodb+srv://user:user@cluster0.dqshm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected")
    } catch (error) {
            console.log(error)
        }

    }
 
    module.exports = dbConfig