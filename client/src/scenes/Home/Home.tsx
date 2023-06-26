import { useState } from 'react';
import Preview from '../../components/Preview/Preview';

function Home() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    await fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(productList => setProducts(productList))
      .catch(err => {
        window.alert(err);
        return;
      })
  }
  
  return (
    <div className="homepage">
      <h1>eNuts</h1>
      <div className="card">
        <button onClick={() => getProducts()}>
              Get Products
        </button>
        {products.map((product: {name: string, price: number, popularItem: boolean}) => 
          <Preview name={product.name} price={product.price} />)}
      </div>
    </div>
  )
}

export default Home;