import React,{ useState, useEffect } from 'react';

const BasicTimer = () => {
    const [time,setTime] = useState(new Date().toISOString());

    useEffect(() => {
        const intervalID = setInterval(
            () => setTime(new Date().toISOString()),1000);
    
        return () => {
            clearInterval(intervalID)
        };
    }, []);

    return(
    <div>
        <span>Date is : {time}</span>
    </div>);
}

export default BasicTimer;