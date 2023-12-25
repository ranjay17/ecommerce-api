const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect('mongodb+srv://sranjay15:rrRR9006@cluster0.e5jjfpe.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Successfully connected to Database : MongoDB');
});

module.exports = db;
