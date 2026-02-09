function Product({ product, addToCart, buyNow }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h4>{product.title}</h4>
      <p className="price">₹ {product.price}</p>

      <div className="btns">
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>

        <button className="buy" onClick={() => buyNow(product)}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Product;
