import ProductCard from '../ProductCard/ProductCard';

export default function ProductList({ products }) {
   const allProducts =  products.map(product => 
    <ProductCard
        key={product._id}
        product={product} 
    /> 
   )
    return (
        <main>
            {allProducts}
        </main>
    )
}