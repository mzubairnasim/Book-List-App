import React from 'react'
import shortid from 'shortid'
import {myapp} from '../App'
import {Link} from 'react-router-dom'
export default function Add() {

    const {state,dispatch} = React.useContext(myapp)
    const {name,arr,id,phone}=state
    
    const add=()=>{
        const item={name:name,id:id,phone:phone}
        arr.push(item)
        dispatch({type:"Data",payload:arr})
        dispatch({type:"Add",payload:""})
        dispatch({type:"Add2",payload:""})
        dispatch({type:"Inf",payload:shortid()})
        console.log(arr)
}


    return (
        <div className='container'>
        <div className='row'>
        <div className='col-lg-8 offfset-2'>
          <div class="form-group mt-3">
            <label for="exampleInputEmail1">Book Name</label>
            <input class="form-control" type='text' value={name} onChange={e=>dispatch({type:"Add",payload:e.target.value})}/><br/><br/>
         </div>
           <div class="form-group mt-3">
            <label for="exampleInputEmail1">Author Name</label>
            <input class="form-control" type='text' value={phone} onChange={e=>dispatch({type:"Add2",payload:e.target.value})}/><br/><br/>
         </div>
         <Link to='/' onClick={add} class="btn btn-primary ">Add</Link>
    
         </div>
             {/* <input type='text' value={name} onChange={e=>dispatch({type:"Add",payload:e.target.value})}/><br/><br/>
             <input type='text' value={phone} onChange={e=>dispatch({type:"Add2",payload:e.target.value})}/>
             <Link to='/' onClick={add}>Add</Link> */}
             </div>
        </div>
    )
}
