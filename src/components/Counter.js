import { CountContext } from "../context/count";
import { PauseContext } from "../context/paused";
import Controls from "./Controls";
import Likes from "./Likes";
import { useContext, useEffect, useState } from "react";

function Counter(){
    // const [count, setCount] = useState(0);
    // const [likedNumbers, setLikedNumbers] = useState({});
    const [paused, setPaused] = useContext(PauseContext)
    const {count, likedNumbers, increment, decrement, like, } = useContext(CountContext)

    useEffect(()=>{
        if(!paused){
            const interval = setInterval(increment,1000);

            return function cleanup(){
                clearInterval(interval)
            };
        }
    }, [paused]);



    return(
        <div>
            <h2>Counter: {count}</h2>
            <Controls 
            increment={increment}
            decrement={decrement}
            like={like}
            paused={paused}
            // togglePaused={togglePaused}
            />
            <Likes />
        </div>
    )
}

export default Counter;