const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Succesful Connect");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}


const bookSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    author : {
        type : String
    },
    price : {
        type : Number,
        // validation minimum 1 value add 1<value 
        min : 1
    },
    discount : {
        type : Number,
        // this means all book automatic add this default value you dont add particular
        default : 0
    }
})

const Book = mongoose.model("Book", bookSchema);


const book1 = new Book({
    name : "The India Story",
    author : "Bimal Jalal",
    // price : "500" : valid
    // price : "abc" : not valid
    price : 500
})

book1.save().then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.log(err)
})


const book2 = new Book({
    name : "A Place Called Home",
    // not add author no pb beacuse not validate 
    price : 800
})

book2.save().then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.log(err)
})


const book3 = new Book({
    name : "Listen to Your Heart: The London Adventure'",
    author : "Ruskin Bond"
    // not add price no pb beacuse not validate
})

book3.save().then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.log(err)
})


const book4 = new Book({
    // if the name is not add so error occur beacuse validation schema require is true so
    name : "Business of Sports: The Winning Formula for Success",
    author : "Vinit Karnik",
    price : 800
})

book4.save().then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.log(err)
})



// all validation only use insert time not use update time
Book.findByIdAndUpdate("65af7fefb043e5edf2beabd4",{price : -10}).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.log(err)
})


//  if you that validation use update time you use runValidators : true
Book.findByIdAndUpdate("65af7fefb043e5edf2beabd4",{price : -10}, {runValidators : true}).then( (data) => {
    console.log(data);
}).catch( (err) => {
    console.log(err)
})