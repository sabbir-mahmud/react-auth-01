import { useState } from "react";

// error state
const useError = () => {
    const [error, setError] = useState('');


    return [error, setError];
}

export default useError;