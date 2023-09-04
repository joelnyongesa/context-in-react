import { createContext, useState } from "react";

// Create the context object
const PauseContext = createContext();

// Create the content provider (component)
const PauseProvider = ({ children }) => {
    const [paused, setPaused] = useState(false)
    const value = [paused, setPaused]
    return ( 
        <PauseContext.Provider value={value}>
            {children}
        </PauseContext.Provider>
     );
}
 
export default PauseProvider;

// export the context object
export { PauseContext, PauseProvider }