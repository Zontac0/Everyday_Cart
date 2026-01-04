export default function ProductCard({ product, addToCart }) {
    const o = product.stock === 0;
    return (<div className="product-card"><img src={product.image} alt={product.title} />
        <h3>{product.title}</h3><p className="price">${product.price}</p>
        <p className="category">{product.category}</p>
        <p className={o ? "out" : "in"}>{o ? "Out of Stock" : `In Stock: ${product.stock}`}</p>
        <button disabled={o} onClick={() => addToCart(product)}>Add to Cart</button></div>);
}