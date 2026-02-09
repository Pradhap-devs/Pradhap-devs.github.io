function Cart({ cart, increase, decrease }) {
  return (
    <div className="cart">
      <h3>Cart</h3>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id}>
          <span>{item.title}</span>

          <button onClick={() => decrease(item.id)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => increase(item.id)}>+</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
