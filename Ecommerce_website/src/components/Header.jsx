function Header({ search, setSearch }) {
  return (
    <header className="header">
      <h2>React Ecommerce</h2>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
}

export default Header;
