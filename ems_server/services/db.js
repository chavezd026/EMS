//import mongoose
const mongoose = require("mongoose")

//connected to mongoose using connection string
mongoose.connect('mongodb://localhost:27017/ems_db')

//create model
const Employee=mongoose.model('Employee',{
    //schema creation
    id:String,
    empname:String,
    age:String,
    designation:String,
    salary:String
})

module.exports={
    Employee
}