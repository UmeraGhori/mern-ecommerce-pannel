const express = require("express");

require("dotenv").config();

console.log(process.env.PORT)

const mongoose = require("mongoose");

const cors = require("cors");

require("./db/config");
const User = require("./db/User");

const Product = require("./db/Product")

// const PORT = process.env.PORT  || 5000;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome I am Live")
})

app.post("/register", async (req, resp) => {
    let user = new User(req.body); //transfering to mongodb
    let result = await user.save(); //save is method in mongoose for promise

    result = result.toObject();
    delete result.password
    resp.send(result);
})

app.post("/login", async (req, resp) => {
    console.log(req.body);
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if(user){+
            resp.send(user)
        } else{
            resp.send({Result: "no user found"})
        }
    }else {
        resp.send({Result: "no user found"})
    }
})

app.post("/addProduct", async (req, resp) => {
    let product = new Product(req.body); //transfering to mongodb
    let result = await product.save(); //save is method in mongoose for promise
    resp.send(result);
})

app.get("/products", async (req, res) => {
    const products = await Product.find();
    if(products.length>0){
        res.send(products)
    } else{
        res.send({Result: "No Product Found"})
    }
})

app.delete("/product/:id", async (req, res) => {
    let result = await Product.deleteOne({_id: req.params.id})
    res.send(result)
})

app.get("/product/:id", async (req, res) => {
    let result = await Product.findOne({_id: req.params.id});
    if(result){
        res.send(result);
    } else{
        res.send({Result: "No Record Found"});
    }
})

app.put("/product/:id", async (req, res) => {
    let result = await Product.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    res.send(result);
})

app.get("/search/:key", async (req, res) => {
    let result = await Product.find({
        "$or": [
            {
                name: {$regex: req.params.key}
            },
            {
                company: {$regex: req.params.key}
            },
            {
                category: {$regex: req.params.key}
            }
        ]
    });
    res.send(result);
})

app.get("/profile/:id", async (req, res) => {
    let result = await User.findOne({_id: req.params.id});
    if(result){
        res.send(result);
    } else{
        res.send({Result: "No Record Found"});
    }
})

app.put("/profile/:id", async (req, res) => {
    let result = await User.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    res.send(result);
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is running on Port" + port);
});

