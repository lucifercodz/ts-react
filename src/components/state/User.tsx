import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const[isUser, setUser] = useState<AuthUser | null>(null)
    // const[isUser, setUser] = useState<AuthUser>({} as AuthUser) "READ NOTE 1"
    const handleLogin = () => {
        setUser({
            name: "Lucifer",
            email:"luci@gmail.com",
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {isUser?.name}</div> 
            {/* READ NOTE 2 */}
            <div>User email is {isUser?.email}</div>
        </div>
    )
}