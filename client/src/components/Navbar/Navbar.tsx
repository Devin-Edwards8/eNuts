import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar(props: {location: string}) {
  const paths = getPaths(props.location)

  return (
    <div className="header">
      <h2><Link to="..">ENUTS</Link></h2>
      <nav className="navbar">
        <Link to={paths.shopPath}>Shop</Link>
        <Link to={paths.mapPath}>Locations</Link>
        <Link to={paths.aboutPath}>About Us</Link>
        <p>Account</p>
      </nav>
    </div>
  );
}

interface Paths {
  shopPath: string,
  mapPath: string,
  aboutPath: string
}

const getPaths = (location: string): Paths => {
  let shopPath, mapPath, aboutPath;
  switch(location) {
  case("home"):
    shopPath = "/shop", mapPath = "/locations", aboutPath = "/about"
    break
  case("shop"):
    shopPath = "", mapPath = "../locations", aboutPath = "../about"
    break
  case("map"):
    shopPath = "../shop", mapPath = "", aboutPath = "../about"
    break
  case("about"):
    shopPath = "../shop", mapPath = "../locations", aboutPath = ""
    break
  case("error"):
    shopPath = "../shop", mapPath = "../locations", aboutPath = "../about"
    break
  default:
    shopPath = "", mapPath = "", aboutPath = ""
    console.log("unexpected path passed to navbar")
    break
  }

  return {
    shopPath,
    mapPath,
    aboutPath
  }
}

export default Navbar;