import { Link } from "react-router-dom";

export default function ProductCard({ product, handleAddToOrder}) {
    return (
        <div>
            <img src={product.image} alt="img" width="250" height="150" />
            <div>{product.name}</div>
            <span>${product.price.toFixed(2)}</span>
            <button onClick={() => handleAddToOrder(product._id)}>
                ADD TO CART
            </button>
            <Link to={`/${product._id}`} > Details</Link>
        </div>
    )
}