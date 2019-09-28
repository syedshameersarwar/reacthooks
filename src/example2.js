import React,{ useState, useEffect } from 'react';

const BasicCounter = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(
            () => setCount(c => c+1),1000); //equivalent of functional setState
    
        return () => {
            clearInterval(intervalID);
        };
    }, []); //can use count as dependency if not using functional setCount

    return(
    <div>
        <span>Count is {count}</span>
    </div>);
}

export default BasicCounter;