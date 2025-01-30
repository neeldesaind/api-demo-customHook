import { useState,useEffect } from 'react';
function useProhook(categoryName){

    const [categoryData, setCategoryData] = useState([]);
    categoryData.forEach((product) => {
        console.log(product.title);
      });
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then((res)=>(res.json()))
        .then((res)=>setCategoryData(res))
        
    }, [categoryName]);
    return categoryData;
}
export default useProhook;