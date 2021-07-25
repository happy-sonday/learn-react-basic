const React = require('react');
const { useState,useRef } = React;


const CalcDate =()=> {
    const [year, setYear]=useState(0);
    const [month, setMonth]=useState(0);
    const [day, setDay]=useState(0);
    const [result, setResult]=useState('');
    const [typed, setTyped]=useState('');
    const [exptBirthDate, setExptBirthDate]=useState('');
    const [restDays, setRestDays]=useState('');
    const [elapsedDays, setElapsedDays]=useState(0);
    const inputRef = useRef(null);

    const range = 14;
    onSubmitForm=(e)=>{
        e.preventDefault();
        setYear(typed.substr(0,4));
        setMonth(typed.substr(4,2));
        setDay(typed.substr(6,2));

        // if(year[year.length-1]===month[0]){            
        //     setResult('딩동댕');
        //     setWord(month);
        //     setValue('');
        //     inputRef.current.focus();
        // }else{
        //     setResult('땡');      
        //     setValue('');
        // inputRef.current.focus();
        // }
        onCalcDDay();
    }


    const onChangeInput=(e)=>{       
       
        setTyped(e.target.value);            
    }



    onCalcDDay=()=>{
        
        
        // const dayUnit = 24*60*60*1000//시분초밀리세컨드
        // const monthUnit = 30.417*dayUnit;
        // const yearUnit = 12*monthUnit;
        const startDate = new Date(`${year}-${month}-${day}`);
         const birthDate = new Date(startDate.setDate(startDate.getDate()+279));
         const transBrirthDate=new Date(birthDate).toISOString();       
        setExptBirthDate(transBrirthDate);




        //출산예정일
        setResult(`${exptBirthDate.substr(0,4)}년 ${exptBirthDate.substr(5,2)}월 ${exptBirthDate.substr(8,2)}일`)
        

        const today = new Date();
        const endDate = new Date(exptBirthDate);

        const restTime = endDate.getTime() - today.getTime();

        setRestDays(Math.ceil(restTime/(24*60*60*1000)));

        
        setElapsedDays(280-restDays);

        
        
    }




    return (
    <>
        <div>기준일 : {range}일</div>
        <form onSubmit={onSubmitForm}>         
            <input  ref={inputRef} value={typed} onChange={onChangeInput} placeholder="YYYYMMDD" maxLength="8" />
            <button>입력!</button>                
        </form>
        
        <section className="result-wrap">
            사용자 입력값 : {year}년 {month}년 {day}일<br/>
            출산 예정일:  {result}<br/>
            D-day : {restDays-1}<br />
            경과일 : {elapsedDays+1}
            <br/>
            경과주: {(elapsedDays+1)/7}<br/>
            {Math.floor((elapsedDays+1)/7/4)}개월 {Math.floor((elapsedDays+1)/7%4)}주 
        </section>
    </>
    )
}

module.exports = CalcDate;
