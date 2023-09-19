import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, OAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const appleProvider = new OAuthProvider('apple.com');

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const googleSingIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const appleSingIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, appleProvider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        singIn,
        logOut,
        googleSingIn,
        appleSingIn
    }
  return <AuthContext.Provider value={authInfo}>
    { children }
  </AuthContext.Provider>;
};

export default AuthProvider;
