import React, { Component } from 'react';

class Try extends Component{
    render(){
        const {tryInfo} = this.props
        return(
         
            <li>
                 <div className="">{tryInfo.try}</div>
                 <div className="">{tryInfo.result}</div>
            </li>
        )
    }
        
    
}

export default Try;