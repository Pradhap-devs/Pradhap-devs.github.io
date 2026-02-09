function Payment({ product, onSuccess }) {
  return (
    
    <div className="payment">
      <h2>Payment</h2>

      <div className="bill">
        <h4>Order Summary</h4>
        <p>Product: {product.title}</p>
        <p>Price: ₹ {product.price}</p>
        <p>Shipping: Free</p>
        <hr />
        <h3>Total: ₹ {product.price}</h3>
      </div>

      <h4>Select Payment Method</h4>

      <button onClick={onSuccess}>Pay with UPI</button>
      <button onClick={onSuccess}>Pay with Card</button>
      <button onClick={onSuccess}>Cash on Delivery</button>
    </div>
  );
}

export default Payment;
