import React from 'react'

const Sort = (props) => {
 const { sortByHigh , sortByLow } = props; 
 
     return(
        <div>
       <b> Sort By </b>
            <button type="button" class="btn" onClick={sortByHigh}> Price -- High Low    
            </button>

            <button type="button" class="btn" onClick={sortByLow}> Price -- Low High
            </button>

            <button type="button" class="btn" > Discount 
            </button>
      </div>
    );

}

export default Sort;