import LineProduct from '../LineProduct/LineProduct';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  // if (!order) return null;

  const lineProducts = order.lineProducts.map(product =>
    <LineProduct
      lineProduct={product}
      // productName={productItem.name}
      // productPrice={productItem.price}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={product._id}
    />
  );

  return (
    <div>
        <h1>{new Date(order.updatedAt).toLocaleDateString()}</h1>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {lineProducts.length ?
          <>
            {lineProducts}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-lg"
                  onClick={handleCheckout}
                  disabled={!lineProducts.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <h1>NO ITEMS</h1>
        }
      </div>
    </div>
  );
}