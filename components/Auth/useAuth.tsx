import { AuthContext } from "./authContext";
import React, {useContext} from 'react'


export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}