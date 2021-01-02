import { Switch, Route, NavLink, useRouteMatch, Redirect } from "react-router-dom"
import Essentials from "./essentials"
import Faculty from "./faculty"
import Library from "./library"
import BreadCrumbs from "./bradcrumbs"

const Accademics = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className="mx-auto p-8 max-w-screen-xl">
            <BreadCrumbs>ACADEMICS</BreadCrumbs>
            <div className="max-w-7xl m-auto grid grid-cols-4">
                <div className="text-gray-700 col-span-full md:col-span-1">
                    <div className="flex justify-center md:justify-start md:sticky top-40">
                        <ul className="text-base font-extrabold flex md:flex-col justify-center md:text-lg md:space-y-3">
                            <NavLink to={`${url}/essentials`} activeClassName="border-b-2 border-gray-700 text-blue-600 md:font-bold" className="flex items-center justify-between px-3 border-b-2 border-transparent  hover:text-blue-600 transition-all">ESSENTIALS</NavLink>
                            <NavLink to={`${url}/library`} activeClassName="border-b-2 border-gray-700 text-blue-600 md:font-bold" className="flex items-center justify-between px-3 border-b-2 border-transparent  hover:text-blue-600 transition-all">LIBRARY</NavLink>
                            <NavLink to={`${url}/faculty`} activeClassName="border-b-2 border-gray-700 text-blue-600 md:font-bold" className="flex items-center justify-between px-3 border-b-2 border-transparent  hover:text-blue-600 transition-all">FACULTY</NavLink>
                        </ul>
                    </div>
                </div>
                <div className="h-auto col-span-full md:col-span-3">
                    <Switch>
                        <Route exact path={path} render={() => (<Redirect to="/academics/essentials" />)} />
                        <Route path={`${path}/essentials`}><Essentials /></Route>
                        <Route path={`${path}/library`}><Library /></Route>
                        <Route path={`${path}/faculty`}><Faculty /></Route>
                    </Switch>
                </div>
            </div>
        </div >
    )
}

export default Accademics