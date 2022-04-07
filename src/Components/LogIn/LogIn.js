import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/Firebase.init';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Google auth provider
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    // sign In navigate button
    const navigate = useNavigate();
    const handleRegisterlink = () => navigate('/register');

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
    return (
        <div className="w-full mt-14 mx-auto max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input onBlur={handleEmail} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input onBlur={handlePassword} className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className=" text-xs italic">Please choose a password.</p>
                </div>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
                    Forgot Password?
                </a>
                <div className="mt-5 flex items-center">
                    <button onClick={handleSignIn} className="bg-blue-500 mr-7 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <button onClick={handleRegisterlink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign Up
                    </button>
                </div>

                <button onClick={googleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-7 rounded focus:outline-none focus:shadow-outline" type="button">
                    Google
                </button>
            </form>
        </div>
    );
};

export default LogIn;