import { useSelector } from "react-redux"

export default function PaymentSummary() {
    const cart = useSelector(state => state.cart)
    return (
        <div className="w-full lg:w-80 bg-white p-4 rounded shadow h-fit">
            <p className="text-green-600 text-sm mb-2">
                Your order is eligible for FREE Delivery
            </p>

            <h2 className="text-lg font-semibold mb-3">
                Subtotal: ₹3,998
            </h2>

            <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-medium mb-3">
                Proceed to Buy
            </button>

            <div className="text-sm text-gray-700 space-y-1">
                <div className="flex justify-between">
                    <span>Items:</span>
                    <span>₹3,998</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery:</span>
                    <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                    <span>Total:</span>
                    <span>₹3,998</span>
                </div>
            </div>

        </div>
    )
}