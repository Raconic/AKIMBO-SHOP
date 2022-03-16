
import OrderDetail from "../../components/OrderDetail/OrderDetail"
export default function CartPage({products, order, handleChangeQty, handleCheckout, user}) {
    return (
      <> 
      <div className="container">
      <h1>{user.name}'s Items</h1>
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