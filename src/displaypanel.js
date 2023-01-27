import React from "react";
import { arrobj } from './data';

class Display extends React.Component{
    constructor(props){
        super(props);
        this.state={ArrObj:arrobj}
        
    }
    
    render(){
        let Picture=this.state.ArrObj.map((val)=>{
            if(val.category==this.props.imageName || val.category1==this.props.imageName)
            return(
                <div className="DisplayFlex">
                    <div><img src={val.image}></img> <img src={val.image1} ></img>
                    <img src={val.image2}></img><img src= {val.image3} ></img>
                    <img src={val.image4}></img> <img src={val.image5}></img>
                    
                    </div>
                </div>
            )
        });
        return(
            <div>
                <div>{Picture}</div>
            </div>
        );
    }
}
export default Display;