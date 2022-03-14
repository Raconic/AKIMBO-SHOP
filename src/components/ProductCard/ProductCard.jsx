export default function ProductCard({ product }) {
    return (
        <div>
            <div>Name:{product.name}</div>
            <div>Price:{product.price}</div>
            <div>Description:{product.description}</div>
            <div>Image: </div>
        </div>
    )
}