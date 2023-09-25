import { type } from "os"
import React, { ReactNode, createContext, useEffect, useState } from "react"

type AppContextProps={

    UserName:any|null;
    setUserName: (UserName:any)=>void,
    
}

export const AppContext=createContext<AppContextProps>({
    UserName:null,
    setUserName:()=>{}
});

const AppContextProvider: React.FC<{children:ReactNode}>=({children})=>{
    const [UserName,setUserName]=useState("")
    //
    useEffect(()=>{

    },[])

    //
    useEffect(()=>{
        
    },[])
    return(
        <AppContext.Provider value={{
            UserName,setUserName
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider