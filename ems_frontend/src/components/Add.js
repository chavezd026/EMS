import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'
import Employee from './Employee'
import { useNavigate } from 'react-router-dom' 
import uuid from 'react-uuid'


function Add() {
    const [id,setId]=useState('')
    const [empName,setEmpname]=useState('')
    const [age,setAge]=useState('')
    const [designation,setDesignation]=useState('')
    const [salary,setSalary]=useState(0)

    const history=useNavigate()

    const handleAdd=(e)=>{
        e.preventDefault()

        let ids=uuid()
        let uniqueId=ids.slice(0,5)
        
        Employee.push({
            id:uniqueId,
            empName:empName,
            age:age,
            designation:designation,
            salary:salary
        })
        history('/')
    }

  return (
    <>
  <h1 className='text-primary text-center my-3'>Add Employee Management System</h1>
   <p className='p-3'>An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions</p>
   <Row>
       <Col md={3}>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_Bp10U0xzgjZMLlIr6nXE_OzlhF0XufYxfKWKdliYQ&s'/>
       </Col>
       <Col md={6}>
       <Form className='border border-3 p-5'>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name"
            onChange={(e)=>setEmpname(e.target.value)} 
            required
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Age" 
            onChange={(e)=>setAge(e.target.value)} 
            required
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Designation" 
            onChange={(e)=>setDesignation(e.target.value)} 
            required
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Salary</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Salary" 
            onChange={(e)=>setSalary(e.target.value)} 
            required
            />
        </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
        Add
      </Button>
    </Form>
       </Col>
       
   </Row>
  </>
  )
}

export default Add