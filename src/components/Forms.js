import React from 'react'



const Forms=(props)=>{
    return(
<form onSubmit={props.getPrime}>
<input  type="text" name="primeNumber"/>
              <button>Get result</button>
</form>
    );
}
export default Forms;

