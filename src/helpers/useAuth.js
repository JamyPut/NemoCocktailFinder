import React, {useContext} from "react";
import AuthContext from "../context/AuthProvider";

//defined custom hook to prevent having to import usecontext and authcontext seperately.
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;