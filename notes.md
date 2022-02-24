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