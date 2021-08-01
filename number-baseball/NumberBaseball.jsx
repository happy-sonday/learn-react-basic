import React, { useState } from 'react';
import Try from './Try';


//NOTE: 다른 스크립트에서 사용할 수 있을 것 같아서 외부에 빼 둠, this 키워드를 사용할 수없다.
function getRandomNumber(){
    const candidate=[1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i<4;i+=1){
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen);
    }
    return array;
}


const NumberBaseball = () =>{

    const [result, setResult]= useState('');
    const [value, setValue]= useState('');
    const [answer, setAnswer]= useState(getRandomNumber);
    const [tries, setTries]= useState([]);


    const onSubmitForm = (e) => {
    
    console.log(answer);
      e.preventDefault();
      if (value === answer.join('')) {
      setResult('홈런!');
      setTries((prevTries)=>{
          return[...prevTries, { try: value, result: '홈런!' }]
      });
      
        
        alert('게임을 다시 시작합니다!');
        setValue('');
        setAnswer(getRandomNumber());
        setTries([]);
        
        
      } else { // 답 틀렸으면
        const answerArray = value.split('').map((v) => parseInt(v));
        let strike = 0;
        let ball = 0;
        if (tries.length >= 9) { // 10번 이상 틀렸을 때
        
        setResult(
            `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`
          );
          alert('게임을 다시 시작합니다!');          
            setValue('');
            setAnswer(getRandomNumber());
            setTries([]);
          
        } else {
          for (let i = 0; i < 4; i += 1) {
            if (answerArray[i] === answer[i]) {
              strike += 1;
            } else if (answer.includes(answerArray[i])) {
              ball += 1;
            }
          }
          setTries((prevTries)=>{
            return [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}]             
            
          });
          setValue('');
        }
      }
    };
  
    const onChangeInput = (e) => {
      setValue(e.target.value)
      
    };
  
  
  
  
  
      return (
        <>
          <h1>{result}</h1>
          <form onSubmit={onSubmitForm}>
            <input maxLength={4} value={value} onChange={onChangeInput} />
          </form>
          <div>시도: {tries.length}</div>
          <ul>
            {tries.map((v, i) => {
              return (
                <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
              );
            })}
          </ul>
        </>
      );
    
  }


export default NumberBaseball; //import NumberBaseball;