import React,{Component}from 'react';
import Forms from './components/Forms';
import GroupForms from './components/GroupForms';
import axios from 'axios'


class App extends Component{
  state={
    repos:null,
    list:null
  }
 getPrime=(e)=>{
    e.preventDefault();
    const number=e.target.elements.primeNumber.value;
    axios.get(`http://localhost:3001/prime/${number}`).then((res)=>{
      console.log(res);
      const repos=res.data;
      this.setState({repos});

    })
  }
  getListOfPrime=(e)=>{
    e.preventDefault();
    const number=e.target.elements.primeNumbers.value;
    axios.get(`http://localhost:3001/primes/${number}`).then((res)=>{
      console.log(res);
      const list=res.data;
      this.setState({list});
      

    })
  }

render(){
  return(
      <div>
       <h1>Checking given number is prime</h1>
         
          
      <Forms getPrime={this.getPrime}/>
      <h2>{this.state.repos}</h2>

      <h1>Enter here to get list of prime</h1>
       <GroupForms getListOfPrime={this.getListOfPrime}/>
       <h2>{this.state.list}</h2>
       
      </div>
  )
}

}



export default App;
