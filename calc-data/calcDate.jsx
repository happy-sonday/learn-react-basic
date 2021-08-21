const React = require('react');
const { useState,useRef } = React;


const CalcDate =()=> {
    const [year, setYear]=useState(0);
    const [month, setMonth]=useState(0);
    const [day, setDay]=useState(0);
    const [result, setResult]=useState('');
    const [typed, setTyped]=useState('');
    const [isBirth, setIsBirth]=useState('');
    const [exptBirthDate, setExptBirthDate]=useState('');
    const [restDays, setRestDays]=useState('');
    const [elapsedDays, setElapsedDays]=useState(0);
    const [elapsWeeks, setElapsWeeks]=useState(0);
    const [currentWeek, setCurrentWeek]=useState(0);
    const inputRef = useRef(null);
    const [elapsWeek, setElapsWeek]=useState(0);
  
    const range = 280;
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
        
        
        const dayUnit = 24*60*60*1000//시분초밀리세컨드 
        const birthDttm = new Date(`${year}-${month}-${day}`);//입력 생일 또는 출산예정일
        const today = new Date();//오늘
        
        const restDttm=today.getTime()-birthDttm.getTime();//시간 빼기
        let restDay =Math.round(restDttm/dayUnit);//남은 요일
        
        const birthF=restDay>0?'태어난지':'태어나기까지';  
        setIsBirth(birthF);


        let elapsDays=280+restDay;//280일 기준으로 남은 요일
        
        //const elasMonth=Math.round(elapsDays/30);
         //const elasWeek= Math.floor(elapsDays/7%4);
        let elapsMonth=Math.floor(elapsDays/30)+1;
        let week = Math.floor(elapsDays/7);
        let elapsWeek = week+1;
    
        
        //let elasWeek= Math.floor((elapsDays)%30/7);

        //let elasWeek=elapsDays%30%7===0?Math.floor(elapsDays%30/7): Math.floor(elapsDays%30/7)+1;        
        //let elasWeek= Math.floor(elapsDays%30/7);        
        //console.log(elapsDays%30%7);

        
        //  if(elapsDays%30===0){
        //      elasWeek=0;
        //  }


        
        // if(elapsDays%30===0){
        //     elasWeek = 0;
        // }else if((elapsDays)%30/7!==0){
        //     elasWeek= Math.floor((elapsDays)%30/7)+1
        // }else{
        //     elasWeek= Math.floor((elapsDays)%30/7);
        // }

        
 

        //console.log(testWeek);

        //주차 계산
        if(restDay<-280){
            restDay=Math.sqrt(Math.pow(restDay, 2));
            elasMonth=0;
            week=0;
            elapsWeek=0;
            //elasMonth= Math.floor(restDay/30)+1;
            
        }



        setCurrentWeek(week);
        setElapsWeek(elapsWeek);
        setRestDays(`${restDay}`);
       
       
        setResult(`${elapsMonth}개월`)
        
        
    }




    return (
    <>
        <div>기준일 : {range}일</div>
        <form onSubmit={onSubmitForm}>         
            <input  ref={inputRef} value={typed} onChange={onChangeInput} placeholder="YYYYMMDD" maxLength="8" />
            <button>입력!</button>                
        </form>
        
        <section className="result-wrap">
            <h1>출생일 또는 출산 예정일 입력</h1>
            사용자 입력값 : {year}년 {month}월 {day}일<br/>
            현재일 기준 차이: {isBirth}{restDays}일<br />
            경과 월주차: {result} ( {currentWeek} 주 )<br/>

            주차계산:{elapsWeek}주차<br />
            {/* 경과 월:{elapsWeek/4} 개월<br /> */}

         {/*    280 초과일 경우 남은 일수: {}일 */}
            
           {/*  출산 예정일:  {result}<br/>
            D-day : {restDays-1}<br />
            경과일 : {elapsedDays+1}
            <br/>
            경과주: {Math.floor((elapsedDays+1)/7)}<br/>
            {Math.floor((elapsedDays+1)/7/4)}개월 {Math.floor((elapsedDays+1)/7%4)}주  */}
        </section>
    </>
    )
}

module.exports = CalcDate;
