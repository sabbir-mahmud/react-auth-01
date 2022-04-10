import { useLocation, Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/Firebase.init";
import AuthenticatedUser from "../../Hooks/useAuthUser";

function RequireAuth({ children }) {
    const auth = getAuth(app);
    const [user] = AuthenticatedUser(auth);
    console.log(user);
    let location = useLocation();

    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;