import logo from './logo.svg';
import Button from './buttonpanel';
import React from 'react';
import './App.css'
import Display from './displaypanel';
import Searchpanel from './searchpanel';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={name:'',picturename:''}
    
    

  }
  

  handleClick0=(name3,name4)=>{
   this.setState({name:name3,picturename:name4})
  }
handleclick=(name22)=>{
  this.setState({picturename:name22,name:name22})
}


  render(){
    return(
      <div>
        
        <Searchpanel prog1={this.handleclick}/>
        <Button prog0={this.handleClick0}/>
        <h1 className='heading'>{this.state.name} </h1>
        <Display imageName={this.state.picturename}/>
               
         

      </div>
    )
  }
}



export default App;
