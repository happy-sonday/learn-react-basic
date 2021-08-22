import React, {Component} from 'react';

class Test extends Component{
    state ={
        counter:0,
    }

    shouldComponentUpdate(nextProps, nextState, nextContext){
        if(this.state.counter!==nextState.counter){
            return true;
        }

        return false;
    }

    onClick = () =>{
        this.setState({});

    };

    render(){
        console.log('렌더링', this.state);
        return (<duv>
            <button onClick={this.onClick}>클릭</button>
        </duv>)
    }
}

export default Test; 