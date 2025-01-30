import { useState, useEffect } from "react";

function useProhook(category) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category])

  return products;
}

export default useProhook;
