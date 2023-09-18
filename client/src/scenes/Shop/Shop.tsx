import "./Shop.css"
import Preview from "../../components/Preview/Preview";
import Dropdown from "../../components/Dropdown/Dropdown";
import Navbar from "../../components/Navbar/Navbar";
// import Select from "react-select";
import { useLoaderData } from "react-router-dom";

function Shop() {
  const products = useLoaderData() as Product[]; 

  // TODO: add selection to toggle results per page
  // const itemsPerPage = [
  //   { value: 12, label: "12" },
  //   { value: 24, label: "24" },
  //   { value: 36, label: "36" }
  // ]

  // TODO: handle filter check
  // const handleCheck = (cb: object) => {
  //   console.log(cb)
  // }

  // TODO: figure out how to fill out filters - probably in this format to map to Dropdown objects easily
  // const filters =[
  //   {
  //     title: "category",
  //     options: ["option1", "option2"]
  //   }
  // ]

  return (
    <div style={{width: "100%"}}>
      <Navbar location="shop"/>
      <div className="shop">
        <div className="product-filter">
          <h1 className="filter-title">Filters</h1>
          <div className="rule" />
          <Dropdown title="category" options={Array(5).fill("testing")}/>
          <Dropdown title="category" options={Array(5).fill("testing")}/>
          <Dropdown title="category" options={Array(5).fill("testing")}/>
        </div>
        <div style={{width: "100%"}}>
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