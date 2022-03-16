import { Link } from "react-router-dom";
import './ProductCard'
export default function ProductCard({ product, handleAddToOrder}) {
    return (
        <div>
            <img src={product.image} alt="img" width="250" height="150" />
            <div>{product.name}</div>
            <span>${product.price.toFixed(2)}</span>
            {/* <Link to={`/${product._id}`} > Details</Link> */}
            <div>
            <button id='addBtn' onClick={() => handleAddToOrder(product._id)}>
                ADD TO CART
            </button>
            </div>
        </div>
    )
}