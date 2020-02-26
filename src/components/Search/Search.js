import React from 'react'

const Search = ( )  => {
    var style = {
         color : "white" ,
        background : "#3a2de9" ,
        fontSize :16
       
    }
    return (
        <div>
        <button class="btn" style={style}> 
        <i class="fa fa-search"></i>
               </button>

               
        </div>
    )
}

export default Search;