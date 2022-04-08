import { useState } from "react";

// useUser
const useUser = () => {
    const [user, setUser] = useState({});

    return [user, setUser];

}

export default useUser;