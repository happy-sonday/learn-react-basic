import React, { Component } from 'react';
import Try from './Try';

function getRandomNumber(){

}


class NumberBaseball extends Component{
    state ={
        result:'',
        value:'',
        answer:getRandomNumber(),
        tries:[],

    };

    fruits=[{fruit: '사과',taste:'맛있다'},{fruit: '바나나',taste:'맛있다'},{fruit: '포도',taste:'맛있다'},{fruit: '귤',taste:'상큼하다'},{fruit: '배',taste:'시원'},{fruit: '밤',taste:'달다'},{fruit: '사과',taste:'달콤하다'}];

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
                    <h3>객체배열</h3>
                    {this.fruits.map((item, idx)=>{
                        return(                            
                          <Try value={item} index={idx} />                 
                            
                        );
                    })}
                </ul>
            </>
        )
    }

    
}


export default NumberBaseball; //import NumberBaseball;