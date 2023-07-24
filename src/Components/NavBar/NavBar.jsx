import "./NavBar.css"
import React from "react"
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux'

let NavBar = () => {
  const state = useSelector(state => state.handleCart)
 return(
    <nav>
  <div className="nav_container">

  <div>
  <Link  to="/" className="nav_logo">Fashion</Link>
  </div>

  <div className="nav_items">
  <div>
  <Link  id = "text" to="/">Home</Link> 
  </div>
  <div>
  <Link id = "text" to="/AboutUS">About Us</Link>
  </div>
  <div>
  <Link id = "text" to="/ContactUS">Contact Us</Link>
  </div>
  </div>

  <div className="nav_btn">

  <div className="dropdown">
  <Link  className="signup" to="/signup"><i class="uil uil-user"></i>SignUP</Link>
  </div>
  <div className="dropdown">
  <Link id = "text" to="/cart" ><i class="uil uil-shopping-bag"></i>Cart ({state.length}) </Link>
  </div>
  
  </div>
  </div>
</nav>
 )
}
export default NavBar