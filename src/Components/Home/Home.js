import React from 'react';
import AuthenticatedUser from '../../Hooks/useAuthUser';
import useLogOut from '../../Hooks/useLogOut';


const Home = () => {
    const [user] = AuthenticatedUser();
    return (
        <div>
            <h1>Home</h1>
            <p>{user ? user.displayName : 'No user'}</p>
            <button onClick={useLogOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-7 rounded focus:outline-none focus:shadow-outline" type="button">Log out</button>

        </div>
    );
};

export default Home;