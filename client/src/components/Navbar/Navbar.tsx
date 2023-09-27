import "./Navbar.css";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/empty-cart-icon.png";
import accountIcon from "../../assets/account-icon.png";
import navIcon from "../../assets/nav-icon.png";
import { useState } from "react";

function Navbar(props: { location: string }) {
  const paths = getPaths(props.location);
  const [loginPopup, setLoginPopup] = useState<"none" | "block">("none");
  // const [accountPopup, setAccountPopup] = useState<"hidden" | "visible">(
  //   "hidden"
  // );
  const [navbar, showNav] = useState<"flex" | "">("");
  const cartNum = 0; // change this to update cart icon
  let cartNumDisplayed = "";
  let cartNumVisibility: "visible" | "hidden" = "hidden";
  if (cartNum == 0) {
    cartNumVisibility = "hidden";
  } else if (cartNum > 0 && cartNum < 100) {
    cartNumVisibility = "visible";
    cartNumDisplayed = String(cartNum);
  } else {
    cartNumVisibility = "visible";
    cartNumDisplayed = "+";
  }

  return (
    <div className="header">
      <h2>
        <Link to="..">ENUTS</Link>
      </h2>
      <img src={navIcon} alt="navigation links" id="nav-icon" 
        onClick={() => {navbar == "flex" ? showNav("") : showNav("flex")}}/>
      <nav className="navbar" style={{display: navbar}}>
        <Link to={paths.shopPath}>Shop</Link>
        <Link to={paths.mapPath}>Locations</Link>
        <Link to={paths.aboutPath}>About Us</Link>
        <Link to="" id="cart-nav">Cart</Link>
        <Link to="" id="account-nav">Account</Link>
        <div className="icons">
          <img
            src={cartIcon}
            alt="view cart button"
            onClick={() => console.log("cart clicked")}
          />
          <span
            className="cart-number"
            style={{ visibility: cartNumVisibility }}
          >
            {cartNumDisplayed}
          </span>
          <img
            src={accountIcon}
            alt="view account information button"
            onClick={() => setLoginPopup("block")}
          />
        </div>
      </nav>
      <div style={{ display: loginPopup }} className="screen-fill"
        onClick={() => setLoginPopup("none")}>
        <div className="login-popup">
          <span className="login-text">log in / sign up</span>
          <span>→</span>
        </div>
      </div>
    </div>
  );
}

interface Paths {
  shopPath: string;
  mapPath: string;
  aboutPath: string;
}

const getPaths = (location: string): Paths => {
  let shopPath, mapPath, aboutPath;
  switch (location) {
  case "home":
    (shopPath = "/shop"), (mapPath = "/locations"), (aboutPath = "/about");
    break;
  case "shop":
    (shopPath = ""), (mapPath = "../locations"), (aboutPath = "../about");
    break;
  case "map":
    (shopPath = "../shop"), (mapPath = ""), (aboutPath = "../about");
    break;
  case "about":
    (shopPath = "../shop"), (mapPath = "../locations"), (aboutPath = "");
    break;
  case "error":
    (shopPath = "../shop"),
    (mapPath = "../locations"),
    (aboutPath = "../about");
    break;
  default:
    (shopPath = "../shop"), (mapPath = "../locations"), (aboutPath = "../about");
    break;
  }

  return {
    shopPath,
    mapPath,
    aboutPath,
  };
};

export default Navbar;
