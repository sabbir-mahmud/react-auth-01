import { useState } from "react";

// useUser
const useUser = () => {
    const [user, setUser] = useState(null);

    return [user, setUser];

}

export default useUser;