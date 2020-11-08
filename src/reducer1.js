import shortid from 'shortid'
export const istate={
    name:"",
    phone:"",
    arr:[],
    id:shortid()
}

export const reducer=(state,action)=>{
    if(action.type==="Add"){
        return{
            ...state,
            name:action.payload,
        }
    }
    if(action.type==="Add2"){
        return{
            ...state,
            phone:action.payload
        }
    }
    if(action.type==="Data"){
        return{
            ...state,
            arr:action.payload
        }
    }
    if(action.type==="Inf"){
        return{
            ...state,
            id:action.payload
        }
    }
    return state

}