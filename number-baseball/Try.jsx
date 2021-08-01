import React, { Component } from 'react';

class Try extends Component{
    render(){
        return(
            <li>
                 <div className="">{this.props.tryInfo.try}</div>
                 <div className="">{this.props.tryInfo.result}</div>
            </li>
        )
    }
        
    
}

export default Try;