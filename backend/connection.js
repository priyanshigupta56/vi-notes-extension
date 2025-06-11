require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB_URL;

//asynchronous function - return a promise 
mongoose.connect(url)
.then((result) => {
    console.log('databse connected');
    
    
}).catch((err) => {
    console.log(err);
    
    
});
module.exports = mongoose;
