import React from 'react';

const Try = ({tryInfo})=>{
    return(
        <li>
            <div className="">{tryInfo.try}</div>
            <div className="">{tryInfo.result}</div>
        </li>
    )
}



export default Try;