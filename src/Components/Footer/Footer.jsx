import {Link} from "react-router-dom"
import "./footer.css"

let Footer = () =>{
    return(
      <footer className="Footer__container">
    <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUS">About</Link></li>
        <li><Link to="/ContactUS">Contact</Link></li>
      </ul>
    </nav>
    </div>
    <div>
    <p>&copy; 2023 Fashion, Inc. All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer
