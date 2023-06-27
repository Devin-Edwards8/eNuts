import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(props: {location: string}) {
  let enutsPath;
  if (props.location === "home") {
    enutsPath = "";
  } else {
    enutsPath = "..";
  }

  return (
    <div className="header">
      <h2><Link to={enutsPath}>ENUTS</Link></h2>
      <div className="navbar">
        <Link to="shop">Shop</Link>
        <Link to="map">Locations</Link>
        <Link to="about">About Us</Link>
        <p>Account</p>
      </div>
    </div>
  );
}

export default Navbar;