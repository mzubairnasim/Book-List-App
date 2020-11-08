import React from 'react'
import {Link} from 'react-router-dom'
import {myapp} from '../App'
export default function Home() {
    const {state,dispatch} = React.useContext(myapp)
    const {arr}=state
    
    const dlt=(id)=>{
        // const filter=data.filter(a=>a.id!==id)
          const filter=arr.filter(a=>a.id!==id)
            dispatch({type:"Data",payload:filter})
    }
    const edit=(id)=>{
        const filter=arr.filter(item=>item.id!==id)
        const find=arr.find(item=>item.id===id)
        dispatch({type:"Data",payload:filter})
        dispatch({type:"Add",payload:find.name})
        dispatch({type:"Add2",payload:find.phone})
    }
    
    
    return (
        <div>
               
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                                <th scope="col">Book Name</th>
                                <th scope="col">Author Name</th>
                                <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                            {arr.map((value,index)=>(
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.phone}</td>
                                    <td>
                                    <Link to='/add' onClick={()=>edit(value.id)} class="btn btn-primary mr-2 ml-2">Edit</Link>
                                    <button type="button" class="btn btn-danger" onClick={()=>dlt(value.id)}>Delete</button>
                                    </td>
                            </tr>
                            ))}
                        
                    </tbody>
</table>
               
            <Link to='/add'>Back</Link>
        </div>
    )
}
