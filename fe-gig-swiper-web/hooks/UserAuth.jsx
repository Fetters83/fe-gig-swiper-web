import { useState,useEffect} from "react"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase_config/config'

function UserAuth(){
  

    const [user, setUser]= useState(null)
    
    useEffect(()=>{
        const signUp = onAuthStateChanged(auth, user =>{
            if(user){ setUser(user)}
            else{ setUser(null)}
        })
        return signUp
    },[])
     return {user}
    
}
export default UserAuth