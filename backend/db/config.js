// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://umeraghori07:Hnuf1234*@cluster0.gdlxdid.mongodb.net/e-commerce?retryWrites=true&w=majority", {
    
// }).then(() => {
//     console.log(`connection successful`);
// }).catch((e) => {
//     console.log(`no connection`)
// });


// const mongoose = require("mongoose");
// const connectDB = async () => {
//     try{
//         await mongoose.connect(process.env.MONGO_CONNECT_URI)
//         console.log("Connect to MongoDB Successfully")
//     } catch (error){
//         console.log("Connect Failed" + error.message);
//     }
// }

// module.exports = connectDB



const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_CONNECT_URI, {
    
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`)
});