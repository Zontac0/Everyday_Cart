import { useEffect, useState } from "react";
export function useCart() {
    const [items, setItems] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
    useEffect(() => { localStorage.setItem("cart", JSON.stringify(items)); }, [items]);
    const addItem = p => {
        setItems(prev => {
            const f = prev.find(i => i.id === p.id);
            if (f) {
                if (f.quantity < p.stock) return prev.map(i => i.id === p.id ? { ...i, quantity: i.quantity + 1 } : i);
                return prev;
            } return [...prev, { ...p, quantity: 1 }];
        });
    };
    const removeItem = id => setItems(p => p.filter(i => i.id !== id));
    const updateQty = (id, q) => setItems(p => p.map(i => i.id === id ? { ...i, quantity: q } : i));
    const totalItems = items.reduce((s, i) => s + i.quantity, 0);
    const totalPrice = items.reduce((s, i) => s + i.quantity * i.price, 0);
    return { items, addItem, removeItem, updateQty, totalItems, totalPrice };
}