const express=require('express')
const connectDB=require('./config/connectDB')
const Person=require('./models/person')
const app=express()
const port=4000
connectDB()
app.listen(port,(err)=>{


  const createPerson=async()=>{

    const newPerson=new Person({name:'maram',age:20,favoriteFoods:['pizza','pasta']})
   const personn=  await newPerson.save()
  console.log(personn)
  }

createPerson()


const arrayOfPeople=()=>{
Person.create([
  {name:'nizar',age:30,favoriteFoods:['couscous','pasta']},
  {name:'ahmed',age:50,favoriteFoods:['riz','bread']},
  {name:'sara',age:40,favoriteFoods:['crepe','salade']}
])

}
arrayOfPeople()



  err?console.log(err):console.log(`server is running on port ${port}`)
})