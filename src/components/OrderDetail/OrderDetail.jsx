import LineProduct from '../LineProduct/LineProduct';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineProducts = order.lineProducts.map(productItem =>
    <LineProduct
      lineProduct={productItem}
      productName={productItem.name}
      productPrice={productItem.price}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={productItem._id}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineProducts.length ?
          <>
            {lineProducts}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineProducts.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="hungry">No Drip?</div>
        }
      </div>
    </div>
  );
}