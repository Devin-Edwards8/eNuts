import "./Product.css";
import Navbar from "../../components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { ProductContract } from "../../types";
import productImg from "../../assets/sample-product.png";

function Product() {
  const product = useLoaderData() as ProductContract;

  return ( 
    <div>
      <Navbar location=""/>
      <div className="product-content">
        <img src={productImg} alt={product.name}></img>
        <h1>product.name</h1>
        
      </div>
    </div>
  );
}

export default Product;