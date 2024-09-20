import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
        <>

            <header>
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <Link to="/"> TODO</Link>
                        </div>

                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutus">About</Link> </li>
                            <li><Link to="/contactus">Contact</Link></li>
                            <li><Link to="/community">Community</Link></li>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header