// Accessing the value from the cotext.
import { useContext } from "react";
import { PauseContext } from "../context/paused";

const Controls = ({ increment, decrement, like}) => {
    const [paused, setPaused] = useContext(PauseContext)

    function togglePaused(){
        setPaused(paused => !paused)
    }
    return ( 
        <div>
            <button onClick={decrement} disabled={paused}>
                <span role="img" aria-label="minus">
                    ➖
                </span>
            </button>
            
            <button onClick={increment} disabled={paused}>
                <span role="img" aria-label="plus">
                    ➕
                </span>
            </button>

            <button onClick={like} disabled={paused}>
                <span role="img" aria-label="heart">
                    ❤️
                </span>
            </button>

            <button onClick={togglePaused}>
                <span role="img" aria-label={paused ? "play" : "paused"}>
                    {paused ? "▶️" : "⏸"}
                </span>
            </button>
        </div>
     );
}
 
export default Controls;