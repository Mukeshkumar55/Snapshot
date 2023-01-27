import React from "react";
import picture from './image1/searchicon.png'
class Searchpanel extends React.Component{
    constructor(props){
        super(props);
        this.state={searchname:null}
    }
    handleclicker(name11){
        console.log('mk')
        this.props.prog1(name11);
        
    }
    handleclick=(event)=>{
        this.setState({searchname:event.target.value})
    }
    render(){
        return(
            <div>
                <div className="head">
                <h1 className="heading_title">IMAGES</h1></div>
            <div className="Searchpanel">
            
                <input onChange={this.handleclick } className="Search" type='text' name="search" placeholder="Serach..."></input>
                <button onClick={()=>{this.handleclicker(this.state.searchname)}} className="PIC"> <img className="search-icon" src='https://static.thenounproject.com/png/3107569-200.png'></img>
                </button>
                
            </div>
            </div>
        )
    }
}
export default Searchpanel;