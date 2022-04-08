// authenticated user
// imports

import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../Firebase/Firebase.init';
const auth = getAuth(app);

const AuthenticatedUser = () => {
    const [user] = useAuthState(auth);
    return [user]
}

export default AuthenticatedUser;