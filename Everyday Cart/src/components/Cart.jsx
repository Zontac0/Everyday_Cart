import CartItem from "./CartItem";
export default function Cart({ cart }) {
    if (!cart.items.length) return <div className="cart empty-cart">Your cart is empty</div>;
    return (<div className="cart"><h2>Shopping Cart</h2>
        {cart.items.map(i => <CartItem key={i.id} item={i} cart={cart} />)}
        <div className="cart-summary"><p><strong>Total Items:</strong> {cart.totalItems}</p>
            <p><strong>Total Price:</strong> ${cart.totalPrice.toFixed(2)}</p></div></div>);
}