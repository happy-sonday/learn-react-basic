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

                    {/* TODO:2차원 배열 */}
                    {/* {[['사과','맛있다'],['바나나','맛있다'],['포도','맛있다'],['귤','상큼하다'],['배','시원'],['밤','달다']].map((item)=>{
                        return(
                            <li><b>{item[0]}</b>-{item[1]}</li>
                        );
                    })} */}
                    {/* TODO:객체 배열 */}
                    <h3>객체배열</h3>
                    {[{fruit: '사과',taste:'맛있다'},{fruit: '바나나',taste:'맛있다'},{fruit: '포도',taste:'맛있다'},{fruit: '귤',taste:'상큼하다'},{fruit: '배',taste:'시원'},{fruit: '밤',taste:'달다'},{fruit: '사과',taste:'달콤하다'}].map((item, idx)=>{
                        return(                 
                            
                            <li key={item.fruit+item.taste}>{idx}번<b>{item.fruit}</b>-{item.taste}</li>
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