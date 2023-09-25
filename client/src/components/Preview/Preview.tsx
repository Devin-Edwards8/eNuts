import "./Preview.css"
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import colorScheme from "../../colors";
import productImg from "../../assets/sample-products/sample-product.png";
import cartIcon from "../../assets/cart-icon.png";
import { ProductContract } from "../../types";

function Preview(props: {product: ProductContract}) {
  return ( 
    <Link to={props.product._id.toString()} className="preview">
      {/* absolutely positioned elements */}
      {props.product.popularItem ? <div className="best-seller-tag"><p>Best Seller</p></div> : <></>}
      <img src={cartIcon} alt="add to cart button" className="cart-icon" 
        onClick={e => e.preventDefault()}/>

      {/* relative elements */}
      <img src={productImg} alt="can of planter's peanuts" className="preview-image"/>
      <div style={{height: "30%"}}>
        <h1>{props.product.name}</h1>
        <p>${props.product.price.toFixed(2)}</p>
        <div className="star-rating">
          <p>3.5</p>
          <Rating initialValue={3.5} allowFraction={true} disableFillHover={true} allowHover={false} fillColor={colorScheme.primaryColor} 
            emptyColor={colorScheme.primaryColor} emptyStyle={{opacity: .4}} size={20}/>
          <p>(90)</p>
        </div>
      </div>
    </Link>
  );
}

export default Preview;