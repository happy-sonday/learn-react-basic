import React, { Component } from 'react';

class Try extends Component{
    render(){
        return(
            <li>
                    <b>{this.props.value.fruit}- {this.props.index}</b>
                    <br/>
                    맛은 {this.props.value.taste}
                    <div>컨텐츠</div>
                    <div>컨텐츠1</div>
                    <div>컨텐츠2</div>
                    <div>컨텐츠3</div>
            </li>
        )
    }
        
    
}

export default Try;