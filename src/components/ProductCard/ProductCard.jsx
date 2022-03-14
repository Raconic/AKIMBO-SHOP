export default function ProductCard({ products }) {
    return (
        <div>
            <div>Name:{products.name}</div>
            <div>Price:{products.price}</div>
            <div>Description:{products.description}</div>
        </div>
    )
}