import ProductCard from '../ProductCard/ProductCard';

export default function ProductList({ products, handleAddToOrder }) {
   const allProducts =  products.map(product => 
    <ProductCard
        key={product._id}
        product={product}
        handleAddToOrder={handleAddToOrder}
    /> 
   )
    return (
        <main>
            {allProducts}
        </main>
    )
}