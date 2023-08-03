import "./NavBar.css"
import React from "react"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

let NavBar = () => {
  const state = useSelector(state => state.handleCart)
  return (
    <header>
      <div className="nav_container">

        <Link to="/" >
          <div className="nav_logo">
            Fashion
          </div>
        </Link>

        <div className="nav_items">

          <Link to="/">
            <div>Home </div>
          </Link>

          <Link to="/AboutUS">
            <div>
              About Us
            </div>
          </Link>

          <Link to="/ContactUS">
            <div>
              Contact Us
            </div>
          </Link>

        </div>


        <div className="nav_btn">
          <Link to="/signup">
            <div >
              <i class="uil uil-user"></i>SignUP
            </div>
          </Link>
          <Link to="/cart" >
            <div >
              <i class="uil uil-shopping-bag"></i>Cart ({state.length})
            </div>
          </Link>
        </div>

      </div>
    </header>
  )
}
export default NavBar