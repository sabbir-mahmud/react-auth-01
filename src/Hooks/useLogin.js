import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "../Firebase/Firebase.init";
// Google auth provider
const provider = new GoogleAuthProvider();
const auth = getAuth(app);


const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // get email
    const handleEmail = (e) => setEmail(e.target.value);

    // get password
    const handlePassword = (e) => setPassword(e.target.value);

    // sign in button
    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => console.error(error))
    }

    // logIn with google
    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => console.log(result))
            .catch((error) => console.error(error))
    }

    return [handleEmail, handlePassword, handleSignIn, googleLogin];
}

export default useLogin;










