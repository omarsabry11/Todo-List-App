import { createContext, useState } from "react";


export let InputValueContext = createContext();




export function InputValueContextProvider({children})
{
    const [inputValue, setInputValue] = useState('');

    return <InputValueContext.Provider value={{inputValue,setInputValue}}>
        {children}
    </InputValueContext.Provider>

}