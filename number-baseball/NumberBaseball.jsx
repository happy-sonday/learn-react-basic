import React, { Component } from 'react';
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



class NumberBaseball extends Component{

    state={
        result:'',
        value:'',
        answer:getRandomNumber(),
        tries : [],
    }
             

 


    onSubmitForm=(e)=>{

       

        const {value, tries, answer} =this.state;
        e.preventDefault();
        
        if(value===answer.join('')){
        this.setState({
            result : '홈런!',
            tries:[...tries, {try:value, result:'홈런!'}]
        })
        }else{
            const answerArray = value.split('').map((v)=>parseInt(v));
            console.log('사용자 입력값',answerArray);
            let strike = 0;
            let ball = 0;
            if( tries.length >=9){
                this.setState({
                    result:`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다.`
                })
                alert('게임을 다시 시작합니다');
                this.setState({
                    value:'',
                    answer:getRandomNumber(),
                    tries:[],
                });
                
            }else{
                for(let i = 0; i<4; i+=1){
                    if(answerArray[i]===answer[i]){
                        strike+=1;
                    }else if(answer.includes(answerArray[i])){
                        ball+=1;
                    }
                }
                this.setState({
                    tries:[...tries, { try: value, result:`${strike} 스트라이크, ${ball}볼 입니다`}],
                })
            }
        };
    }

    onChangeInput=(e)=>{        
        this.setState({
            value : e.target.value,
        });
    };

    render(){
        const { result, value, tries} =this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput} />
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

    
}


export default NumberBaseball; //import NumberBaseball;