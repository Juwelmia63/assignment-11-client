import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";




 export const Authcontex = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true)


    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(()=>{
        setLoading(false)
      const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
        })

        return ()=>{
            return unsubscribe();
        }
      
    },[])



    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        


    }
    return (
        <Authcontex.Provider value={authInfo}>
            {children}
            
        </Authcontex.Provider>
    );
};

export default AuthProvider;