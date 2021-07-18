const React = require('react');
const { useState,useRef } = React;


const WordRelay =()=> {
    const [word, setWord]=useState('손데이');
    const [value, setValue]=useState('');
    const [result, setResult]=useState('');
    const inputRef = useRef(null);
    state ={
        word:'손데이',
        value:'',
        result:'',
    };

    onSubmitForm=(e)=>{
        e.preventDefault();
        if(word[word.length-1]===value[0]){            
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        }else{
            setResult('딩동댕');      
            setValue('');
        inputRef.current.focus();
        }
    }


    const onChangeInput=(e)=>{
        setValue(e.target.value);
    }

    return (
    <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>         
            <input  ref={inputReft} value={value} onChange={onChangeInput} />
            <button>입력!</button>                
        </form>
        <div>{this.state.result}</div>
    </>
    )
}

module.exports = WordRelay;
