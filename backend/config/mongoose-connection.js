const mongoose = require('mongoose');
const config = require("config");

const dbgr = require("debug")("development:mongoose");

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    dbgr("connected");
})
.catch(function(err){
    dbgr(err);
});

module.exports = mongoose.connection;

/*
/ -> signup or login page
/shop -> shop
/users/cart -> cart
/admin -> admin panel
/owner/products -> show all products
/owner/admin -> show admin panel to create products
*/
