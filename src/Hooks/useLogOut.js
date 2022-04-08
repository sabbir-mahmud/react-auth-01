import { getAuth, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";
const auth = getAuth(app);

const useLogOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sign out successful", auth)
            ;

    }).catch((error) => {
        // An error happened.
        console.log("sign out error", error);
    });
}

export default useLogOut;