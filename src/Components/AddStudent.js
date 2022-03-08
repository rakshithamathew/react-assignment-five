import React, { useState } from 'react'
import "./styles.css"
import {nanoid} from 'nanoid'
import { Outlet, useNavigate } from 'react-router'

function AddStudent() {
    const navi = useNavigate();
    const [addData , setAddData] =useState({
        name:'',
        age:'',
        course:'',
        batch:''
    })
    const addDataChange = (event) =>{
        event.preventDefault();
    const inputName = event.target.getAttribut('name');
    const inputValue = event.target.value;

    const newFormData = { ...addData};
    newFormData[inputName] = inputValue;

    setAddData(newFormData);
    }

    const submitForm =(event) =>{
        event.preventDefault();

        const newForm ={
            id: nanoid(),
            name: addData.name,
            age: addData.age,
            course: addData.course,
            batch: addData.batch
        }
        const newForms =[...addData, newForm];
        setAddData(newForms);
    }
  return (
    <div>
        <center>
        <h1>Add Student Page</h1>
        <form onSubmit={submitForm}>
        <label>Name</label>
        <input type='text' name='name'onChange={addDataChange} /><br/>
        
        <label>Age</label>
        <input type='text' name='age' onChange={addDataChange} /><br/>

        <label>Course</label>
        <input type='text' name='course' onChange={addDataChange} /><br/>

        <label>Batch</label>
        <input type='text' name='batch' onChange={addDataChange} /><br/>
        <button>Submit</button>
        <button onClick={() => navi("/Student")}>Go Back</button>
        <Outlet/>
        </form>
        </center>
    </div>
  )
}

export default AddStudent