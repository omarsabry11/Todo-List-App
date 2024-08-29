import { createContext, useState } from "react";


export let UpdatingContext = createContext();




export function UpdatingContextProvider({children})
{
    const [updating, setUpdating] = useState(false);

    return <UpdatingContext.Provider value={{updating,setUpdating}}>
        {children}
    </UpdatingContext.Provider>

}