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



const NumberBaseball = () => {

    const [result, setResult] = useState('');
    const [value, setVale] = useState('');
    const [answer, setAnswer] = useState(getRandomNumber());
    const [tries, setTries] = useState([]);

    const onSubmitForm=(e)=>{     

        const {value, tries, answer} =this.state;
        if(value === answer.join('')){
        e.preventDefault();
        setResult('홈런!');
        setTries((prevTries)=>{
            return[prevTries, {try : value, result:'홈런!'}]
        });
        setVale('');
        setAnswer(getRandomNumber());
        setTries([]);
    
        
        }else{
            const answerArray = value.split('').map((v)=>parseInt(v));
            console.log('사용자 입력값',answerArray);
            let strike = 0;
            let ball = 0;
            if( tries.length >=9){
                
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다.`);                
                alert('게임을 다시 시작합니다');
                setVale('');
                setAnswer(getRandomNumber());
                setTries([]);
                    
                                
            }else{
                for(let i = 0; i<4; i+=1){
                    if(answerArray[i]===answer[i]){
                        strike+=1;
                    }else if(answer.includes(answerArray[i])){
                        ball+=1;
                    }
                }

                setTries((prevTries)=>{
                    [...prevTries, { try: value, result:`${strike} 스트라이크, ${ball}볼 입니다`}]
                });
                setVale('');
           
            }
        };
    }

    const onChangeInput=(e)=>{        

        setVale(e.target.value);
    };




        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={onSubmitForm}>
                    <input maxLength={4} value={value} onChange={onChangeInput} />
                </form>
                <div>시도: {tries.length}</div>
                <ul>
                    
                    {tries.map((item, idx)=>{
                        return(                            
                          <Try key={`${idx+1}차 시도:`}  tryInfo={item} />                 
                            
                        );
                    })}
                </ul>
            </>
        )
   

    
}


export default NumberBaseball; //import NumberBaseball;