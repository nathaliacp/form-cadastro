import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home/home";
import Register from "../pages/Register/register";

function Routes() {

    return(
        <Switch>
            <Route exact path={"/"}>
                <Register/>
            </Route>

            <Route exact path={"/:name"}>
                <Home/>
            </Route>

        </Switch>
    )

}

export default Routes;