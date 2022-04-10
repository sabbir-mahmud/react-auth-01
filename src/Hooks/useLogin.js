import { getAuth, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../Firebase/Firebase.init";
import useError from "./useError";
import useUser from "./useUser";
// Google auth provider
const provider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const gitProvider = new GithubAuthProvider();
const auth = getAuth(app);




const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useError();
    const [user, setUser] = useUser();
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/home";

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
                setError(null);
                navigate(from, { replace: true });

            })
            .catch((error) => {
                setError(error.message);
            })
    }

    // logIn with google
    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                setError(null);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error))
    }

    // logIn with facebook
    const facebookLogin = () => {
        signInWithPopup(auth, fbProvider)
            .then(result => {
                setUser(result.user);
                setError(null);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error))
    }
    // logIn with github
    const githubLogin = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                setUser(result.user);
                setError(null);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error))
    }

    return [user, error, handleEmail, handlePassword, handleSignIn, googleLogin, facebookLogin, githubLogin];
}

export default useLogin;