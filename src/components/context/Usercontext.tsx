import { createContext, useState } from "react"

export type AuthUser = {
    name: string
    email: string
}

type UserContextType = {
    User: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

export const Usercontext = createContext<UserContextType | null>(null)

export const UsercontextProvider = ({children}: UserContextProviderProps) => {
    const [User, setUser] = useState<AuthUser | null>(null)
    return (
        <Usercontext.Provider value={{User, setUser}}>
            {children}
        </Usercontext.Provider>
    )
}