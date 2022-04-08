import React from 'react';
import AuthenticatedUser from '../../Hooks/useAuthUser';


const Home = () => {
    const [user] = AuthenticatedUser();
    return (
        <div>
            <h1>Home</h1>
            <p>{user ? user.displayName : 'No user'}</p>

        </div>
    );
};

export default Home;