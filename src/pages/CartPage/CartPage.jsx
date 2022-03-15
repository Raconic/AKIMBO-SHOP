import { Link } from "react-router-dom";
import OrderDetail from "../../components/OrderDetail/OrderDetail"
export default function CartPage({products, order, handleChangeQty, handleCheckout}) {
    return (
      <> 
      <div className="order-page">
          <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
          <OrderDetail 
              products={products}
              order={order}
              handleChangeQty={handleChangeQty}
              handleCheckout={handleCheckout}
          />
      </div>
  </>
    );
  }