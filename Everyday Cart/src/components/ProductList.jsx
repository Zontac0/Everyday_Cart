import { memo } from "react";
import ProductCard from "./ProductCard";
function ProductList({ products, addToCart }) {
    if (!products.length) return <p className="empty">No products found</p>;
    return (<div className="product-grid">{products.map(p => <ProductCard key={p.id} product={p} addToCart={addToCart} />)}</div>);
}
export default memo(ProductList);