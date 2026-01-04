export default function Filters({ products, search, setSearch, category, setCategory, sort, setSort }) {
    const categories = [...new Set(products.map(p => p.category))];
    return (<div className="filters">
        <input placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} />
        <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">All Categories</option>{categories.map(c => <option key={c}>{c}</option>)}</select>
        <select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="">Sort By</option><option value="low">Price: Low → High</option><option value="high">Price: High → Low</option></select>
        <button className="clear" onClick={() => { setSearch(""); setCategory(""); setSort(""); }}>Clear</button></div>);
}