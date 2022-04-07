import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import app from "../Firebase/Firebase.init";

const useRegister = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const auth = getAuth(app);



    // get display name
    const handleDisplayName = (e) => setFirstName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);

    // get email
    const handleEmail = (e) => setEmail(e.target.value);

    // get password
    const handlePassword = (e) => setPassword(e.target.value);

    // set user name
    const handleUserName = () => {
        const userName = firstName + ' ' + lastName;
        updateProfile(auth.currentUser, {
            displayName: userName
        }).then(() => {
            console.log('User name updated');
            // Profile updated!
            // ...
        }).catch((error) => {
            console.error(error);
            // An error occurred
            // ...
        });
    }

    // register button
    const handleRegister = (e) => {
        e.preventDefault();
        const displayName = firstName + ' ' + lastName;
        console.log(email, password, displayName);
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then((result) => {
                console.log(result)
                handleUserName();
            })
            .catch((error) => console.error(error))
    }

    return [handleEmail, handlePassword, handleDisplayName, handleLastName, handleRegister]
}

export default useRegister;