import "./Product.css";
import Navbar from "../../components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { ProductContract } from "../../types";
import productImg from "../../assets/sample-products/sample-product.png";
import colorScheme from "../../colors";
import { Rating } from "react-simple-star-rating";

function Product() {
  const product = useLoaderData() as ProductContract;

  return ( 
    <div>
      <Navbar location=""/>
      <div className="product-content">
        <img src={productImg} alt={product.name} id="product-image"></img>
        <h1>{product.name}</h1>
        <Rating initialValue={3.5} allowFraction={true} disableFillHover={true} allowHover={false} fillColor={colorScheme.primaryColor} 
          emptyColor={colorScheme.primaryColor} emptyStyle={{opacity: .4}} size={20}/>
        <p>{product.price}</p>
        <p>{product.popularItem ? "Hot Item" : ""}</p>

      </div>
    </div>
  );
}

export default Product;