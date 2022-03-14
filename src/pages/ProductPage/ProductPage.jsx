import { useState, useEffect } from 'react'
import NewProductForm from "../../components/NewProductForm/NewProductForm";
import * as productsAPI from "../../utilities/products-api"
import  ProductList from "../../components/ProductList/ProductList"



export default function ProductPage({ user }) {
  const [ products, setProducts ] = useState([])

  async function handleCreate(formData) {
    console.log(formData)
    const product = await productsAPI.createProduct(formData)
    setProducts(...products, product)
  }

  useEffect(function() {
    async function getAllProducts() {
      const products = await productsAPI.index()
      setProducts(products)
    }
    getAllProducts();
  }, []);





  return (
      <main>
        <h1>ProductPage</h1>
        {user.role==="admin" &&<NewProductForm handleCreate={handleCreate}/>}
        <div>
        <ProductList products={products} />
        </div>

      </main>
    );
  }