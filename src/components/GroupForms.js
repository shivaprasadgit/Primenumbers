import React from 'react'



const GroupForms=(props)=>{
    return(
<form onSubmit={props.getListOfPrime}>
<input  type="text" name="primeNumbers"/>
              <button>Get result</button>
</form>
    );
}
export default GroupForms;