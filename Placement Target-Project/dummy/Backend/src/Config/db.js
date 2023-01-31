// const mongoose = require('mongoose');
// const dotenv = require("dotenv");
// dotenv.config();
// const connect = async () => {
//     return mongoose.connect(process.env.DATABASE_URL)
// }

// module.exports = connect;

const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

const connection = () => {
    mongoose.connect("mongodb+srv://chanchal:chsv1609@cluster0.muj7zwv.mongodb.net/myntra?retryWrites=true&w=majority").then((data) => {
        console.log(`connected with server${data.connection.host}`)
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = {
    connection
}

