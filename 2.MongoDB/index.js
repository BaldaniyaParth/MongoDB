const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("sucessfull conection");
  })
  .catch((err) => {
    console.log(err);
  });


//   Connect mongodb to node
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}


// make schema of database
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  marks: Number,
});


// make model and collections of particular schema
const User = mongoose.model("User", userSchema);


// one person value insert
const user1 = new User({
  name: "Parth",
  email: "parthbaldaniya35678@gmail.com",
  age: 21,
  marks: 99,
});

const user2 = new User({
  name: "Jay",
  email: "jay123@gmail.com",
  age: 22,
  marks: 85,
});


// save is promise return and that means store the data in database
user1.save();

user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


// Multiple person value insert
User.insertMany([
    {
        name: "Raj",
        email: "rajparmar123@gmail.com",
        age: 20,
        marks: 75,
    },
    {
        name: "Mehul",
        email: "mehul123dabhi@gmail.com",
        age: 21,
        marks: 80,
    }
]).then( (res) => {
    console.log(res)
});


// Print the store data
User.find().then( (data) => {
    console.log(data);
} ).catch((err) => {
    console.log(err);
})


// Specific condition data print
User.find({name : "Parth"}).then( (data) => {
    console.log(data);
} ).catch((err) => {
    console.log(err);
})


// only first match print
User.findOne({name : "Parth"}).then( (data) => {
    console.log(data);
} ).catch((err) => {
    console.log(err);
})


// Id throw print data
User.findById("65af5a7291ddf9c9f7ead7c2").then( (data) => {
    console.log(data);
} ).catch((err) => {
    console.log(err);
})


// Update the value
User.updateOne({marks : 99}, {marks : 97}).then( (data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


// find and update
User.findOneAndUpdate({name : "Prince", email : "princebaldaniya@gmail.com"}, {name : "Parth", email : "parthbaldaniya35678@gmail.com"}).then( (data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


// find the id and that value update
User.findByIdAndUpdate("65af60b47051b073efbad765", {name : "Dharmik", email : "dharmikvajava@gmail.com"}).then( (data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})


// Delete the store data
User.deleteOne({name : "Dharmik"}).then( (data) => {
    console.log(data);
} ).catch((err) => {
    console.log(err);
})


// Delete the multiple store data using same condition
User.deleteMany({age : 21}).then( (data) => {
    console.log(data);
} ).catch((err) => {
    console.log(err);
})


// find and delete
User.findOneAndDelete({age : 20}).then( (data) => {
    console.log(data);
} ).catch((err) => {
    console.log(err);
})


// find the id and that value delete
User.findByIdAndDelete("65af5a7291ddf9c9f7ead7c3").then( (data) => {
    console.log(data);
} ).catch((err) => {
    console.log(err);
})