import {Redirect, Route} from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = props => {
    const {auth} = useAuth();

    if (!auth) {
        return <Redirect to="/login" />;
    }

    return <Route { ... props} />
}
export default RequireAuth;