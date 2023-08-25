import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link , useNavigate} from 'react-router-dom'
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaUserEdit,FaUserTimes } from "react-icons/fa";
import axios from 'axios';
import { useState,useEffect } from 'react';


function Home() {
    const [allEmployees,setAllEmployees]=useState([])

    const fetchData=async()=>{
      const result = await axios.get('http://localhost:8000/allemployee')
      console.log(result);
      console.log(result.data.employees);
      setAllEmployees(result.data.employees)
    }
    console.log(allEmployees);

    useEffect(()=>{
      fetchData()
    },[])

    const history=useNavigate()
    const handleDelete=(id)=>{
        var index=Employee.map(item=>item.id).indexOf(id) //index
        Employee.splice(index,1) //item remove
        history('/') //refresh
    }
    const handleEdit=(id,empName,age,designation,salary)=>{
        localStorage.setItem("ID",id);
        localStorage.setItem("NAME",empName);
        localStorage.setItem("AGE",age);
        localStorage.setItem("DESIGNATION",designation);
        localStorage.setItem("SALARY",salary);
    }
  return (
    <>
    <h1 className='text-primary text-center my-3'>Employee Management System</h1>
    <p className='p-3'>An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions</p>
    <Link to={'/add'}>
        <Button variant='success'><BsFillPersonPlusFill/></Button>
    </Link>
    <h3 className='my-3'>List Of Employees</h3>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Employee Name</th>
        <th>Age</th>
        <th>Designation</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        allEmployees?.map((item)=>(
            <tr>
                <td>{item.id}</td>
                <td>{item.empName}</td>
                <td>{item.age}</td>
                <td>{item.designation}</td>
                <td>{item.salary}</td>
                <td>
                    <Link to={'/edit'}>
                        <Button onClick={()=>handleEdit(item.id,item.empName,item.age,item.designation,item.salary)} variant="primary"><FaUserEdit/></Button>
                    </Link>
                 <Button onClick={()=>handleDelete(item.id)} variant="danger"><FaUserTimes/></Button>
                </td>
            </tr>
        ))
      }
    </tbody>
  </Table>
  </>
  )
}

export default Home