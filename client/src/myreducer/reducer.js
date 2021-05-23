const iState = {
    text:'',
    mywishes:[{_id:1,wish:"loading"}]
}

const reducer = (state=iState,action)=>{
     switch(action.type){
         case "UPDATE_INPUT":return {
            ...state,
            text:action.payload
        };
        case "GET_WISH":return {
            ...state,
            mywishes:action.payload
        };
        case "ADD_WISH":return {
            ...state,
            mywishes:[...state.mywishes,action.payload]  // appending res2 in intial mywishes 
        };
        case "DELETE_WISH":
            const newWishes = state.mywishes.filter(item=>{
                return item._id !== action.payload._id
              })
        return {
     
            
            ...state,
            mywishes:newWishes
        };
        

        default : return state
     }
    
    
}

export default reducer;