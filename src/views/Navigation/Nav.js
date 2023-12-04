import React from "react";
import './Nav.scss';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" exact={true}>Home</NavLink>
                <NavLink to="/todos" >Todos</NavLink>
                <NavLink to="/about" >About</NavLink>
                {/* <Link to="/">Home</Link>
                <Link to="/todos">Todos</Link>
                <Link to="/about">About</Link> */}
            </div>
        )
    }
}
export default Nav;