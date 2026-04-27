import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../../store/cartSlice"

export default function PaymentSummary() {
    const cart = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    let totalPrice = 0
    cart.forEach((cartItem) => {
        totalPrice += cartItem.price * Number(cartItem.quantity)
    })

    const handleCheckout = () => dispatch(clearCart())

    return (
        <div className="w-full lg:w-80 bg-white p-4 rounded shadow h-fit">
            <p className="text-green-600 text-sm mb-2">
                Your order is eligible for FREE Delivery
            </p>

            <h2 className="text-lg font-semibold mb-3">
                Subtotal: ₹{totalPrice}
            </h2>

            <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-medium mb-3" onClick={() => handleCheckout()}>
                Proceed to Buy
            </button>

            <div className="text-sm text-gray-700 space-y-1">
                <div className="flex justify-between">
                    <span>Items:</span>
                    <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery:</span>
                    <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                    <span>Total:</span>
                    <span>₹{totalPrice}</span>
                </div>
            </div>

        </div>
    )
}