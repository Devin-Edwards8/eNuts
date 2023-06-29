import "./preview.css"
import { Rating } from "react-simple-star-rating";
import colorScheme from "../../colors";
import productImg from "../../assets/sample-product.png";
import cartIcon from "../../assets/cart-icon.png";

function Preview(props: {name: string, price: number, popularItem: boolean}) {
  return ( 
    <div className="preview">
      {/* absolutely positioned elements */}
      {props.popularItem ? <div className="best-seller-tag"><p>Best Seller</p></div> : <></>}
      <img src={cartIcon} alt="add to cart button" className="cart-icon"/>

      {/* realtive elements */}
      <img src={productImg} alt="can of planter's peanuts" style={{height: "60%", marginTop: "5%", alignSelf: "center"}}/>
      <div style={{height: "30%", overflow: "hidden"}}>
        <h1>{props.name}</h1>
        <p>${props.price.toFixed(2)}</p>
        <div className="star-rating">
          <p>3.5</p>
          <Rating initialValue={3.5} allowFraction={true} disableFillHover={true} allowHover={false} fillColor={colorScheme.primaryColor} 
            emptyColor={colorScheme.primaryColor} emptyStyle={{opacity: .4}} size={20}/>
          <p>(90)</p>
        </div>
      </div>
    </div>
  );
}

export default Preview;