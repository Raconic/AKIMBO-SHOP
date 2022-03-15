export default function LineProduct({ lineProduct, isPaid, handleChangeQty }) {
    return (
      <div className="LineItem">
        <div className="flex-ctr-ctr flex-col">
          <img src={lineProduct.product.image} alt="img" width="250" height="150" />
          <span className="align-ctr">{lineProduct.product.name}</span>
          <span>${lineProduct.product.price.toFixed(2)}</span>
        </div>
        <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
          {!isPaid &&
            <button
              className="btn-xs"
              onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty - 1)}
            >−</button>
          }
          <span>{lineProduct.qty}</span>
          {!isPaid &&
            <button
              className="btn-xs"
              onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty + 1)}
            >+</button>
          }
        </div>
        <div className="ext-price">${lineProduct.extPrice.toFixed(2)}</div>
      </div>
    );
  }