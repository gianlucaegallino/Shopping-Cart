import { useEffect, useState } from "react";
import { ProductContext } from "./productContext.js"

//API url
const URL = "https://fakestoreapi.com/products/category/";

//Data provider for product data fetching

//TODO: Add props
//TODO: Add validations, status, etc.


export default function ProductDataProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //Makes requests to the urls
    Promise.all([
      fetch(URL + "jewelery", { mode: "cors" }),
      fetch(URL + "men's clothing", { mode: "cors" }),
      fetch(URL + "women's clothing", { mode: "cors" }),
    ])
      .then((responses) =>
        Promise.all(
          //maps each response to a json and verifies for failures
          responses.map((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
        )
      )
      .then((data) => {
        //flattens the data and sets state
        setProducts(data.flat());
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
