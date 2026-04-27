function FiltersBar() {
    return (
        <aside className="hidden md:block w-64 bg-white p-4 border-r">
            <h2 className="font-semibold mb-3">Filters</h2>

            <div className="mb-4">
                <p className="text-sm font-medium mb-2">Category</p>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li><input type="checkbox" /> Electronics</li>
                    <li><input type="checkbox" /> Fashion</li>
                    <li><input type="checkbox" /> Home</li>
                </ul>
            </div>

            <div>
                <p className="text-sm font-medium mb-2">Price</p>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li><input type="checkbox" /> Under ₹500</li>
                    <li><input type="checkbox" /> ₹500 - ₹2000</li>
                    <li><input type="checkbox" /> ₹2000+</li>
                </ul>
            </div>
        </aside>
    )
}

export default FiltersBar