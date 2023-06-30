import "./Shop.css"
import Preview from "../../components/Preview/Preview";
import Navbar from "../../components/Navbar/Navbar";
// import Select from "react-select";
import { useLoaderData } from "react-router-dom";

function Shop() {
  interface productResponse {
    name: string,
    price: number,
    popularItem: boolean
  }

  const products = useLoaderData() as productResponse[]; 
  const itemsPerPage = [
    { value: 12, label: "12" },
    { value: 24, label: "24" },
    { value: 36, label: "36" }
  ]

  return (
    <div className="shop">
      <Navbar location="shop"/>
      <div className="content">
        <div className="product-filter">
          <h1>Filters</h1>
          <div className="rule" />
        </div>
        <div>
          <div className="product-header">
            <h1>{products.length} Results</h1>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
              <h2>Items Per Page</h2>
            </div>
          </div>
          <div className="product-container">
            {products.map((product: Product) => 
              <Preview product={product}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop;