import { createContext } from "react";

export const MeshContext = createContext();


const MeshProvider = ({children}) => {
    
    

    return (
        <MeshContext.Provider >
            {children}
        </MeshContext.Provider>
    )
}


export default MeshProvider;