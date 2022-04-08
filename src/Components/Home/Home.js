import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Home</h1>
            <p>{user ? user.displayName : 'No user'}</p>

        </div>
    );
};

export default Home;