import { useSelector } from "react-redux"
import CartProduct from "./CartProduct"

export default function CartSummary() {
    const cart = useSelector(state => state.cart)
    return (
        <div className="flex-1 bg-white p-4 rounded shadow">
            <h1 className="text-xl font-semibold mb-4">Shopping Cart</h1>
            {
                cart.map((cartItem, index) => (
                    <CartProduct cartItem={cartItem} key={index}/>
                ))
            }
            <div className="text-right mt-4">
                <p className="text-lg font-semibold">
                    Subtotal (2 items): ₹3,998
                </p>
            </div>
        </div>
    )
}