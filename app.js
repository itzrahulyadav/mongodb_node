const mongoose = require('mongoose')
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/fruitsDB')
.then(()=>{
    console.log("connected successfully")
}).catch(err=>console.log(err));

const fruitSchema = new mongoose.Schema({
    name:String,
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
})

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    rating:8,
    review:"Immaculate taste"
})

fruit.save();

//creating a new schema person

const personSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const Person = mongoose.model("Person",personSchema);

const person = new Person({
    name:"Rahul",
    age:22
})

//person.save();
const orange = new Fruit({
    name:"orange",
    rating:4,
    review:"a bit weird"
})

const banana = new Fruit({
    name:"Banana",
    rating:9,
    review:"easy to eat and great taste"
})

// Fruit.insertMany([orange,banana],(err)=>{
//        if(err)console.log(err)
//        else console.log("added successfully");
// })

//reading data from our database

// Fruit.find((err,fruits)=>{
//     if(err)console.log(err);
//     else{
//         mongoose.connection.close();
//         fruits.forEach(f=>{
//             console.log(f.name);

//         })
//     }
// })

//validating data using mongoose

//update and delete the data using mongoose
