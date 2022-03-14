import { useState } from 'react'
import NewProductForm from "../../components/NewProductForm/NewProductForm";
import * as productsAPI from "../../utilities/products-api"
import  ProductList from "../../components/ProductList/ProductList"


export default function ProductPage() {
  const [ products, setProducts ] = useState([])
    async function handleCreate(formData) {
      console.log(formData)
      const product = await productsAPI.createProduct(formData)
      setProducts(...products, product)
  }



  return (
      <main>
        <h1>ProductPage</h1>
        <NewProductForm handleCreate={handleCreate}/>
        <div>
        <ProductList products={products} />
        </div>

      </main>
    );
  }