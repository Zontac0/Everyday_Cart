export default function CartItem({ item, cart }) {
    return (<div className="cart-item">
        <span>{item.title}</span>
        <input type="number" min="1" max={item.stock} value={item.quantity}
            onChange={e => cart.updateQty(item.id, +e.target.value)} />
        <button onClick={() => cart.removeItem(item.id)}>✕</button></div>);
}