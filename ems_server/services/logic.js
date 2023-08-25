//import db
const db=require('./db')

//get all employees
const allEmployees=()=>{
    return db.Employee.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    employee:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Employee not found"
                }
            }
        }
    )
}

module.exports={
    allEmployees
}