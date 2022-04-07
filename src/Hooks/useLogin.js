import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "../Firebase/Firebase.init";
import useError from "./useError";
import useUser from "./useUser";
// Google auth provider
const provider = new GoogleAuthProvider();
const auth = getAuth(app);


const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useError();
    const [user, setUser] = useUser(null);

    // get email
    const handleEmail = (e) => setEmail(e.target.value);

    // get password
    const handlePassword = (e) => setPassword(e.target.value);

    // sign in button
    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message);
            })
    }

    // logIn with google
    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => setUser(result.user))
            .catch((error) => console.error(error))
    }

    return [user, error, handleEmail, handlePassword, handleSignIn, googleLogin];
}

export default useLogin;