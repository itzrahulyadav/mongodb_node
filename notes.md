#connect to mongoose

#npm i mongoose
#require(mongoose) in the project

//connect mongodb with node using the following lines
```
mongoose.connect('mongodb://localhost:27017/fruitsDB')
.then(()=>{
    console.log("connected successfully")
}).catch(err=>console.log(err));
```

//create schema 
const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
})

//create mongodb model
const Fruit = mongoose.model("Fruit",fruitSchema);


//create new fruit collection and add apple into it
```
const fruit = new Fruit({
    name:"Apple",
    rating:5,
    review:"Pretty Awesome"
})

//everytime we run our server it will add apple into our database
fruit.save();
```

//adding many elements in our database
//create two new fruits orange and banana

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

//add multiple records using insertMany

Fruit.insertMany([banana,orange],callbackfunction(err)=>{
    if(err)console.log(err)
    else console.log("inserted successfull");
})

#reading data from the database using mongoose

Fruit.find((err,fruits)=>{
    if(err)console.log(err);

    //close the database collection
    mongoose.connection.close();

    else console.log(fruits);
})

//validating data using mongoose
we can specify the required field to make it mandatory to enter a field name in the collections

```
const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"missing name field"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
})

//update data using mongoose
```
Fruit.updateOne({ _id: "621716fb0144187b90778513"},{name:"peach"},(err)=>{
    if(err)console.log(err)
    else console.log("updated successfully")
})

```
//delete data using mongoose
```
Fruit.deleteOne({ _id: "62170b529bb4499af74412dc"},(err)=>{
    if(err)console.log(err);
    else console.log("deleted successfully")
})

```

establishing relationship in database

const person = new Person({
    name:"Nancy",
    age:22,
    favouriteFruit:pineApple-->this is a another collection |
                                                             
})
//this is linked as Nancy's favourite fruit

const pineApple = new Fruit({
    name:"Pineapple",
    rating:8,
    review:"kinda awesome"
})