import "./Shop.css"
import Preview from "../../components/Preview/Preview";
import { ProductContract } from "../../types";
import Dropdown from "../../components/Dropdown/Dropdown";
import Navbar from "../../components/Navbar/Navbar";
// import Select from "react-select";
import { useLoaderData } from "react-router-dom";

function Shop() {
  const products = useLoaderData() as ProductContract[]; 
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
  const filters =[
    {
      title: "Nut Type",
      options: ["Peanuts", "Almonds", "Cashews", "Pistachios", "Legumes"]
    },
    {
      title: "Price",
      options: ["Under $5", "$5-$10", "$10-$20", "Over $20"]
    },
    {
      title: "Rating",
      options: ["1-3 Stars", "4 Stars", "5 Stars"]
    },
  ]

  return (
    <div style={{width: "100%"}}>
      <Navbar location="shop"/>
      <div className="shop">
        <div className="product-filter">
          <h1 className="filter-title">Filters</h1>
          <div className="rule" />
          {filters.map(e => <Dropdown title={e.title} options={e.options}/>)}
        </div>
        <div style={{width: "100%"}}>
          <div className="product-header">
            <h1>{products.length} Results</h1>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
              <h2>Items Per Page</h2>
            </div>
          </div>
          <div className="product-container">
            {products.map((product: ProductContract) => 
              <Preview product={product}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop;