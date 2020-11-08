import React, { createContext } from 'react'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Add from './components4/Add'
import Home from './components4/Home'
import {istate,reducer} from './reducer1'
import 'bootstrap/dist/css/bootstrap.min.css';
export const myapp=createContext()

export default function App() {
    const [state, dispatch] = React.useReducer(reducer, istate)
    return (
        <div>
            <myapp.Provider value={{state,dispatch}}>
            <BrowserRouter>
            {/* <Link to='/'>Home</Link> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="navbar-header">
      <Link class="navbar-brand" to='/'>BOOK LIST APP</Link> 
    </div>
    <ul class="nav navbar-nav">
   
    <Link to='/add' class="btn btn-primary ">Add</Link>
   
    </ul>
  </div>
</nav>
            {/* <Link to='/add' class="btn btn-primary ">Add</Link> */}
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/add' component={Add}></Route>
                </Switch>
            </BrowserRouter>
            </myapp.Provider>
        </div>
    )
}