import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    // const user = {email: 'Al-Bal Tal'}
    const [user, setUser] = useState(null);

    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email, password);
    }

    const logOut =() =>{
        return signOut(auth);
    }

    // observer user auth state
    

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
    };  

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;