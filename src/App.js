import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters'
//import { render } from '@testing-library/react';

class App extends Component {
  state = { 
    counters: [
    {id:1, value:4},
    {id:2, value:0},
    {id:3, value:0},
    {id:4, value:0}
 ]
} ;
constructor(props){
  super(props);
  console.log("App - Constructor");
  //this.state = this.props.something;
}

handleIncrement = counter => {
    const counters = [...this.state.counters]; 
    const Index = counters.indexOf(counter);
    counters[Index] = {...counter};
    counters[Index].value++;
    this.setState({counters});
}
handleDecrement = counter => {
    const counters = [...this.state.counters]; 
    const Index = counters.indexOf(counter);
    counters[Index] = {...counter};
    if(counters[Index].value !== 0)
    counters[Index].value--;
    this.setState({counters});
}
handleReset = () =>{
    const counters = this.state.counters.map(c=>{
        c.value = 0;
        return c;
    });
    this.setState({counters});
}

handleDelete = counterId =>{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
}
render()  {
  return (
    <React.Fragment>
      <Navbar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
      <main className='container'>
        <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement ={this.handleIncrement}
      onDecrement ={this.handleDecrement}
      onDelete={this.handleDelete}
    />
      </main>
      </React.Fragment>
    );
  }
}
export default App;
