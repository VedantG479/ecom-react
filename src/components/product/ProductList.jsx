import FiltersBar from "./FiltersBar"
import ProductCard from "./ProductCard"
import productsList from '../../data/products.js'

function ProductList() {
    return (
        <main className="flex-1 p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {productsList.map((productItem, index) => (
                    <ProductCard product={productItem} key={index}/>
                ))}
            </div>
        </main>
    )
}

export default ProductList