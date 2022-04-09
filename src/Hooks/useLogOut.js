import { getAuth, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";
// import { useNavigate } from 'react-router-dom';
const auth = getAuth(app);

const useLogOut = () => {
    // const navigate = useNavigate();
    const logOut = (navigate) => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("sign out successful", auth)
            navigate('/');

        }).catch((error) => {
            // An error happened.
            console.log("sign out error", error);
        });
    }
    return { logOut }
}

export default useLogOut;