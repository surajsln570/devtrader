"use client"
import { getAllProject } from "@/fetch/project.api"
import { createContext, useContext, useEffect, useState } from "react"
const AppContext = createContext()

export function AppProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [projects, setProject]=useState([])
    const [isLoggedIn, setIsLoggedIn] =useState(false)
    
   
    return (
        <AppContext.Provider value={{ projects,setProject, isLoggedIn }}>
            {children}
        </AppContext.Provider>
    )
}
export function useAppContext(){
    return useContext(AppContext)
}