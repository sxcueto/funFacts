import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper blue lighten-2">
<div className="container">
    <a href="/" className='brand-logo'>Fun Facts!</a>

    <ul className="right">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fact1">Fact One</Link></li>
        <li><Link to="/fact2">Fact Two</Link></li>
        <li><Link to="/fact3">Fact Three</Link></li>
    </ul>

</div>

    </nav>
  )
}

export default withRouter (Navbar);