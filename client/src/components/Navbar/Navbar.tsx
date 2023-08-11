import "./Navbar.css"
import { Link } from "react-router-dom";
import cartIcon from "../../assets/empty-cart-icon.png"
import accountIcon from "../../assets/account-icon.png"
import { useState } from "react";

function Navbar(props: {location: string}) {
  const paths = getPaths(props.location)
  const [cartPopup, setCartPopup] = useState<"hidden" | "visible">("hidden");
  const [loginPopup, setLoginPopup] = useState<"hidden" | "visible">("hidden");
  const [accountPopup, setAccountPopup] = useState<"hidden" | "visible">("hidden");
  const cartNum = 0;
  let cartNumDisplayed = "";
  let cartNumVisibility: "visible" | "hidden" = "hidden";
  if(cartNum == 0) {
    cartNumVisibility = "hidden";
  } else if (cartNum > 0 && cartNum < 100) {
    cartNumVisibility= "visible";
    cartNumDisplayed = String(cartNum);
  } else {
    cartNumVisibility= "visible";
    cartNumDisplayed = "+";
  }

  return (
    <div className="header">
      <h2><Link to="..">ENUTS</Link></h2>
      <nav className="navbar">
        <Link to={paths.shopPath}>Shop</Link>
        <Link to={paths.mapPath}>Locations</Link>
        <Link to={paths.aboutPath}>About Us</Link>
        <div className="icons">
          <img src={cartIcon} alt="view cart button" onClick={() => setCartPopup("visible")}/>
          <span className="cart-number" style={{visibility: cartNumVisibility}}>{cartNumDisplayed}</span>
          <div style={{visibility: cartPopup}} className="cart-popup">
            <span className="empty-cart-message">Your cart is empty.</span>
            <div className="rule" />
          </div>
          <img src={accountIcon} alt="view account information button" onClick={() => setLoginPopup("visible")}/>
          <div style={{visibility: loginPopup}} className="login-popup">
            <span className="login-text">log in / sign up</span><span>→</span>
          </div>
          <div style={{visibility: accountPopup}} className="account-popup">

          </div>
        </div>
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