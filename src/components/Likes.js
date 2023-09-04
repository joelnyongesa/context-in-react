import { useContext } from "react";
import { CountContext } from "../context/count";

const Likes = () => {
    const {likedNumbers} = useContext(CountContext)
    return ( 
        <div>
            <h2>Likes: </h2>
            {Object.keys(likedNumbers).map((key)=>(
                <p key={key}>
                    {key}: {likedNumbers[key]} likes
                </p>
            ))}
        </div>
     );
}
 
export default Likes;