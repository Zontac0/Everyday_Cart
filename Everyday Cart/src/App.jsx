import { useEffect, useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Filters from "./components/Filters";
import { useCart } from "./hooks/useCart";
export default function App() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState(""); const [category, setCategory] = useState("");
    const [sort, setSort] = useState(""); const cart = useCart();
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then(r => r.json()).then(d => {
            setProducts(d.map(p => ({ ...p, stock: Math.floor(Math.random() * 6) + 1 })));
        });
    }, []);
    const visibleProducts = useMemo(() => {
        let l = [...products];
        if (search) l = l.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
        if (category) l = l.filter(p => p.category === category);
        if (sort === "low") l.sort((a, b) => a.price - b.price);
        if (sort === "high") l.sort((a, b) => b.price - a.price);
        return l;
    }, [products, search, category, sort]);
    return (<div className="app"><header><h1>Everyday Cart</h1>
        <p>Your Everyday Online Store</p>
    </header>
        <Filters products={products} search={search} setSearch={setSearch} category={category}
            setCategory={setCategory} sort={sort} setSort={setSort} />
        <div className="layout"><ProductList products={visibleProducts} addToCart={cart.addItem} />
            <Cart cart={cart} /></div></div>);
}