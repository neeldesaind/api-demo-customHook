import { useState } from "react";
import useProhook from "./hooks/useProhook";

function App() {
  const [category, setCategory] = useState("");
  
  const products = useProhook(category);

  return (
    <>
      <h1>API Demo</h1>
      
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Select Category..." defaultChecked>Select a category</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="men's clothing">Mens Clothing</option>
        <option value="women's clothing">Womens Clothing</option>
      </select>
      <br />

      {
        products.map((product) => <p key={product.id}>{product.title}</p>)
      }
    </>
  );
}

export default App;
