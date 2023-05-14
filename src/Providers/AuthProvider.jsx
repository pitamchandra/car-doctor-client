import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const register = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            if(currentUser && currentUser.email){
                const userEmail = {
                    email : currentUser.email
                }
                fetch('https://car-doctor-server-pitamchandra.vercel.app/jwt',{
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(userEmail)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    localStorage.setItem('car-token', data.token)
                    
                })
                .catch(error=>{
                    console.log(error);
                })
            }
            else{
                localStorage.removeItem('car-token')
            }
        })
        return () =>{
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        register,
        login,
        googleLogin,
        githubLogin,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;