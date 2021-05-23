

export const handleInputAction = (input)=>{
    return{
        type:"UPDATE_INPUT",
        payload:input
    }

}

export const fetchWishAction = ()=>{
    return (dispatch)=>{
        fetch('/data')
        .then(res=>res.json())
        .then(res2=>{
          console.log(res2)
         // this.setState({
           // mywishes:res2
          //})
          dispatch({type:"GET_WISH",payload:res2}) 
        })    

    }
}

export const handleSubmitAction = (e)=>{
    return (dispatch)=>{
        e.preventDefault();
        // const url = "http://localhost:5000/sent";
         var data = new URLSearchParams();
          for(const pair of new FormData(e.target)){
            data.append(pair[0],pair[1])
          }
          //localhost:5000/sent
         fetch('/sent',{
             method:"post",
             body:data,
            
         }).then(res=>res.json())
         .then(res2 => {
           console.log(res2)
         
          // this.setState({
            // mywishes:[...this.state.mywishes,res2]
          // })
          dispatch({type:"ADD_WISH",payload:res2})  
         }); 
        }
    }
    
    export const handleDeleteAction = (id)=>{
    return (dispatch) =>{
        
            fetch('/remove/'+id,{method:"delete"})
            .then(res=>res.json())
            .then(res2=>{
              console.log(res2)
                        // const newWishes = state.mywishes.filter(item=>{
                        // return item._id !== res2._id
                        // })
                        //  this.setState({
                        //  mywishes:newWishes
                        //  })
            dispatch({type:"DELETE_WISH",payload:res2})
            })
          }
        }

        
