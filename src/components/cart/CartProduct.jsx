import { useDispatch } from "react-redux"
import { removeFromCart, updateQuantity } from "../../store/cartSlice"

export default function CartProduct({cartItem}) {
    const dispatch = useDispatch()

    const deleteCartItemHandler = (cartItemId) => dispatch(removeFromCart(cartItemId))
    const updateItemQuantityHandler = (cartItemId, quantity) => dispatch(updateQuantity({cartItemId, quantity}))

    return (
        <div className="flex gap-4 border-b py-4">
            <img src={cartItem.image} className="w-32 h-32 object-contain" />

            <div className="flex flex-col flex-1">
                <h2 className="text-sm font-medium text-gray-800">{cartItem.title}</h2>
                <p className="text-xs text-green-600 mt-1">In stock</p>

                <p className="text-xs text-gray-500 mt-1">Eligible for FREE delivery</p>
                <div className="flex items-center gap-3 mt-3">
                    <select className="border rounded px-2 py-1 text-sm" onChange={(e) => updateItemQuantityHandler(cartItem.id, e.target.value)}>
                        <option value={1}>Qty: 1</option>
                        <option value={2}>Qty: 2</option>
                        <option value={3}>Qty: 3</option>
                        <option value={4}>Qty: 4</option>
                        <option value={5}>Qty: 5</option>
                    </select>

                    <button className="text-blue-600 text-sm hover:underline" onClick={() => deleteCartItemHandler(cartItem.id)}>
                        Delete
                    </button>
                </div>
            </div>

            <div className="text-right">
                <p className="text-lg font-semibold">{cartItem.price}</p>
            </div>

        </div>
    )
}