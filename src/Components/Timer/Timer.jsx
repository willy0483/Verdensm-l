import { TimerStyled } from "./Timer.Styled";

import { useState , useEffect} from "react";


export const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    const deadLine = "2030-01-24T00:00:00";

    const getTime = () =>{
        const time =Date.parse(deadLine) - Date.now();
        setSeconds(time);
    }

    useEffect(() =>{
        const interval = setInterval(()=>{
            getTime(deadLine,1000)
        })
        return () =>{
            clearInterval(interval);
        }
    },[])

    return(
        <TimerStyled>
            <p>{seconds}</p>
        </TimerStyled>
    )
}