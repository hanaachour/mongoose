 const express=require("express");
 const mongoose=require("mongoose");
 const user=require("./user");
 const app =express();
 mongoose.set("strictQuery",false);

 mongoose.connect("mongodb+srv://Hana:1234@cluster0.yvfwbba.mongodb.net/?retryWrites=true&w=majority");


//////////////////////////////////////Create and Save a Record of a Model::////////////////////////////////////////

/*const Person= user.create({
    name:"Hana",
    age:29,
    favoriteFoods:"Pasta"});
    */

//////////////////////////////////////////Create Many Records with model.create()/////////////////////////////
/*
async function start() {
const arrayOfPeople=[
    {name:"S1",age:1,favoriteFoods:"F1"},
    {name:"S2",age:2,favoriteFoods:"F2"},
    {name:"S3",age:3,favoriteFoods:"F3"},
]; 
await user.create(arrayOfPeople);
}
start();
*/
/////////////////////////////////////////Use model.find() to Search Your Database/////////////////////
/*
async function start() {
  const people = await user.find();
   console.log(people);
 }
start();
*/
////////////////////////////////////////Use model.findOne() to Return a Single Matching Document from Your Database////////////////
/* 
async function start() {
  const person = await user.findOne({ name: "Hana" });
  console.log(person);
 }
 
*/
////////////////////////////////////////Use model.findById() to Search Your Database By _id///////////////////
/*
async function start(){
const person= await user.findById("63dad8536d893d28583ac329");
console.log(person);
}
start();
*/
////////////////////////////////////////Perform New Updates on a Document Using model.findOneAndUpdate()//////////////////
/*
async function start() {
     await user.findByIdAndUpdate("63dad8536d893d28583ac329", {
        $push: { favoriteFoods: "CousCous"},
      });
    
    }
    start();
*/
//////////////////////////////////////////
/*
async function start() {
       await user.findOneAndUpdate({ name: "S1" }, { age: 20 }, { new: true });
 }
 start();
 */
///////////////////////////////////////////Delete One Document Using model.findByIdAndRemove

/*
async function start() {
  await user.findByIdAndRemove("63dad8536d893d28583ac32a");
 }
 start();
 */
///////////////////////////////////////////MongoDB and Mongoose - Delete Many Documents with model.remove()
/*
async function start() {
   await user.deleteMany({ name: "S1" });
 }
 start();
 */
//////////////////////////////////////////Chain Search Query Helpers to Narrow Search Results
async function start() {
    const arrayOfPeople=[
        {name:"Hamdi",age:30,favoriteFoods:"Pasta"},
        {name:"Souha",age:25,favoriteFoods:"Pasta"},
        {name:"Leila",age:50,favoriteFoods:"Pasta"},
    ]; 
    await user.create(arrayOfPeople);
  
   const specificSearch = await user.find({ favoriteFoods: "Pasta" })
     .sort({
       age: 1,
     })
     .limit(1)
     .select("name");
   console.log(specificSearch);
}
 start();
 
  
  
 app.listen(5000,()=>{console.log("server is running")});