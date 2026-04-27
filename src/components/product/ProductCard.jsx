import { useDispatch } from "react-redux"
import { addToCart } from "../../store/cartSlice"

function ProductCard({ product }) {
    const dispatch = useDispatch()
    const addToCartHelper = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className="bg-white w-full rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <img
                src={product.image}
                alt="Product"
                className="w-full h-52 object-contain mb-3"
            />
            <h2 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">{product.title}</h2>
            <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 text-sm">
                    ★{product.rating}
                </div>
                <span className="text-xs text-blue-300 ml-2">
                    {product.reviews}
                </span>
            </div>

            <div className="mb-2">
                <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
            </div>

            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-sm font-medium py-2 rounded"
                onClick={() => addToCartHelper(product)}>
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard