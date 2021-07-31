const { Component } = require('react');
const React = require('react');
const {useRef,useState} = React;

function getRandomNumber(){

}


class NumberBaseball extends Component{
    state ={
        result:'',
        value:'',
        answer:getRandomNumber(),
        tries:[],

    };

    onSubmitForm=()=>{
        
    };

    onChangeInput=()=>{
        
    };

    render(){
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {['사과','바나나','포도','귤','배','밤'].map((item)=>{
                        return(
                            <li>{item}</li>
                        );
                    })}
                    {/* <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li> */}
                </ul>
            </>
        )
    }

    
}


export default NumberBaseball; //import NumberBaseball;