const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://umeraghori07:Hnuf1234*@cluster0.gdlxdid.mongodb.net/e-commerce?retryWrites=true&w=majority", {
    
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`)
});