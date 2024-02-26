import { useContext } from 'react'
import { Usercontext } from "./Usercontext"

export const User = () => {
    const userContext = useContext(Usercontext)
    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'Prathamesh',
                email: "pratham@gmail.com"
            })
        }
    }
    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext?.User?.name}</div>
            <div>User email is {userContext?.User?.email}</div>
        </div>
    )
}