import { createContext, useContext, useState } from "react";

const UserContext = createContext()

const initialState = {
    isLoggedin : false,
    name : "",
    email : "",
    phone : "",
    password : "",
    orders : []
}


export const UserProvider = ({children}) => {
    const [user, setUser] = useState(initialState)
    const dispatch = (action) => {
        switch(action.type) {
            case "name" : {
                setUser({...user, name : action.payload})
                break
            }
            case "phone" : {
                setUser({...user, phone : action.payload})
                break
            }
            case "email" : {
                setUser({...user, email : action.payload})
                break
            }
            case "password" : {
                setUser({...user, password : action.payload})
                break
            }
            case "login" : {
                setUser({...user, isLoggedin : true})
                break
            }
            case "logout" : {
                setUser({...user, isLoggedin : false})
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