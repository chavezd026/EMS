import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'
import Employee from './Employee'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const [id,setId]=useState('')
    const [empName,setEmpname]=useState('')
    const [age,setAge]=useState('')
    const [designation,setDesignation]=useState('')
    const [salary,setSalary]=useState(0)

    useEffect(()=>{
        setId(localStorage.getItem('ID'))
        setEmpname(localStorage.getItem('NAME'))
        setAge(localStorage.getItem('AGE'))
        setDesignation(localStorage.getItem('DESIGNATION'))
        setSalary(localStorage.getItem('SALARY'))
    },[])

    var index=Employee.map(item=>item.id).indexOf(id)
    
    let history=useNavigate()

    const handleUpdate=(e)=>{
        e.preventDefault()
        let emp=Employee[index]
        emp.id=id
        emp.empName=empName
        emp.age=age
        emp.designation=designation
        emp.salary=salary
        history('/')
    }

  return (
  <>
  <h1 className='text-primary text-center my-3'>Update Employee Management System</h1>
   <p className='p-3'>An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions</p>
   <Row>
       <Col md={3}>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_Bp10U0xzgjZMLlIr6nXE_OzlhF0XufYxfKWKdliYQ&s'/>
       </Col>
       <Col md={6}>
       <Form className='border border-3 p-5'>
        <Form.Group className="mb-3">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Your ID" 
            value={id}
            onChange={(e)=>setId(e.target.value)} 
            required
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name"
            value={empName}
            onChange={(e)=>setEmpname(e.target.value)} 
            required
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Age" 
            value={age}
            onChange={(e)=>setAge(e.target.value)} 
            required
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Designation" 
            value={designation}
            onChange={(e)=>setDesignation(e.target.value)} 
            required
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Salary</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Salary" 
            value={salary}
            onChange={(e)=>setSalary(e.target.value)} 
            required
            />
        </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
        Update
      </Button>
    </Form>
       </Col>
       
   </Row>
  </>
  )
}

export default Edit