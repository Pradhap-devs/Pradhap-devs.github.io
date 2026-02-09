import { useEffect, useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // 🔥 payment states
  const [showPayment, setShowPayment] = useState(false);
  const [buyProduct, setBuyProduct] = useState(null);

  // 🔥 Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // ➕ Add to cart
  function addToCart(product) {
    const found = cart.find(item => item.id === product.id);

    if (found) {
      found.qty += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  // ➕ Increase qty
  function increase(id) {
    const updated = cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updated);
  }

  // ➖ Decrease qty
  function decrease(id) {
    const updated = cart
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0);

    setCart(updated);
  }
  function buyNow(product) {
  console.log("BUY CLICKED", product);
  setBuyProduct(product);
  setShowPayment(true);
}


 

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ CORRECT conditional render
  if (showPayment && buyProduct) {
    return (
      <Payment
        product={buyProduct}
        onSuccess={() => {
          alert("Payment Successful!");
          setShowPayment(false);
          setBuyProduct(null);
        }}
      />
    );
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <div className="container">
        <div className="products">
          {filteredProducts.map(product => (
            <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
              buyNow={buyNow}
            />
          ))}
        </div>

        <Cart
          cart={cart}
          increase={increase}
          decrease={decrease}
        />
      </div>
    </>
  );
}

export default App;
