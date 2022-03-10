import NewProductForm from "../../components/NewProductForm/NewProductForm";

export default function ProductPage( {createProduct} ) {
    return (
      <main>
        <h1>ProductPage</h1>
        <NewProductForm createProduct={createProduct}/>
      </main>
    );
  }