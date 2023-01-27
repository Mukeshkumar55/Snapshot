import React from "react";


class Button extends React.Component{
    constructor(props){
        super(props)
        
    }
    handleclicker(name1,name2){
        this.props.prog0(name1,name2);
        
    }
    render(){
        return(
            <div>
                
<div className="Overall">
<button onClick={() => {this.handleclicker('Mountain Picture','mountain')}} className="m">Mountains</button>
<button onClick={() => {this.handleclicker('Beach Picture','beach')}} className="b" >Beaches</button>               
<button onClick={()=> {this.handleclicker('Birds Picture','bird')}} className="bird">Birds</button>
<button onClick={()=> {this.handleclicker('Food Pictures','food')}} className="f">Foods</button>
                 
</div>
                 
                 

            </div>
        )
    }
}
export default Button;