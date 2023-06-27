import "./Shop.css"
import Preview from "../../components/Preview/Preview";
import Navbar from "../../components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";

function Shop() {
  interface productResponse {
    name: string,
    price: number,
    popularItem: boolean
  }

  const products = useLoaderData() as productResponse[]; 

  return (
    <div className="shop">
      <Navbar location="shop"/>
      <div className="content">
        <div className="product-filter">
          <p>hello</p>
        </div>
        <div className="product-container">
          {products.map((product: {name: string, price: number, popularItem: boolean}) => 
            <Preview name={product.name} price={product.price} />)}
        </div>
      </div>
    </div>
  )
}

export default Shop;