import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Parametros from "../Pages/Parametros";
import Niveles from "../Pages/Niveles";
import Login from "../Pages/Login"
import PageNotFound from "../Pages/PageNotFound";
import 'bootstrap';


export default function AppRouter() {
    return (
        <>
            <Switch>
                <Route path="/parametros/" component={Parametros} />
                <Route path="/niveles/" component={Niveles} />
                <Route path="/login/" component={Login} />
                <Route path="/" exact component={Login} />
                <Route path="/*" component={PageNotFound} />
            </Switch>
        </>
    )
}
