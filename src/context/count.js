import { createContext, useState } from "react";

/*
Create a CountContext and CountProvider
    - Wrap the application with CountProvider
    - Use the state variables in the Counter component as the values for CountContext
    - Connect the Counter, Controls and Likes components to CountProvider
*/

// Create the context object
const CountContext = createContext();

// Create the context provider (component)
const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [likedNumbers, setLikedNumbers] = useState({})

    function increment(){
        setCount(count=> count + 1);
    }

    function decrement(){
        setCount(count => count -1)
    }

    function like(){
        setLikedNumbers((likedNumbers)=>{
            const likes = (likedNumbers[count] || 0) + 1;
            return{
                ...likedNumbers,
                [count]: likes,
            };
        });
    }

    const value = {
        count,
        likedNumbers,
        increment,
        decrement,
        like,
    }
    return ( 
        <CountContext.Provider value={value}>
            {children}
        </CountContext.Provider>
     );
}
 


// export the context object
export {CountProvider, CountContext}