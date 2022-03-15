
import NewProductForm from "../../components/NewProductForm/NewProductForm";
import  ProductList from "../../components/ProductList/ProductList"

export default function ProductPage({ user, products, handleCreate, handleAddToOrder }) {
  
  return (
      <main>
        <h1>ProductPage</h1>
        {user.role==="admin" &&<NewProductForm handleCreate={handleCreate}/>}
        <div>
        <ProductList 
        products={products} 
        handleAddToOrder={handleAddToOrder} 
        />
        </div>

      </main>
    );
}