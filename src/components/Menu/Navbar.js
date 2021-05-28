import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="icon-bar">
                <Link  to="/"><i class="fa fa-home"></i></Link>
                <Link to="/search"><i className="fa fa-search"></i></Link>
                <Link to="/create"><i className="fa fa-envelope"></i></Link>
                <Link to="/home"><i className="fa fa-globe"></i></Link>
                <Link to="/delete"><i className="fa fa-trash"></i></Link>
            </div>
        </>
    )
}

export default Navbar
