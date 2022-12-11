import { createContext, useContext, useState } from "react";

const UserContext = createContext()

const initialState = {
    isLoggedin : true,
    name : "",
    email : "",
    phone : "",
    password : ""
}


export const UserProvider = ({children}) => {
    const [user, setUser] = useState(initialState)
    const dispatch = (action) => {
        switch(action.type) {
            case "ADD_USER" : {
                setUser(action.payload)
                break
            }
            case "loggedin" : {
                setUser({...user, isLoggedin : true})
                console.log(user)
                break
            }
            default :
        }
    }

    return  <UserContext.Provider value = {{user,dispatch}}>
            {children}
            </UserContext.Provider>
}

export const useUser = () => useContext(UserContext)