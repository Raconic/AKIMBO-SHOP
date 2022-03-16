import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'
export default function ProductList({ products, handleAddToOrder }) {
   const allProducts =  products && products.map(product => (
    <ProductCard
        key={product._id}
        product={product}
        handleAddToOrder={handleAddToOrder}
    /> 
   ))
    return (
        <main>
            <div className='grid'>
            {allProducts}
            </div>
        </main>
    )
}