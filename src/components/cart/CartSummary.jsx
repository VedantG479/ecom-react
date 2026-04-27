import { useSelector } from "react-redux"
import CartProduct from "./CartProduct"

export default function CartSummary() {
    const cart = useSelector(state => state.cart.cartItems)

    let totalItems = 0, totalPrice = 0
    cart.forEach((cartItem) => {
        totalItems += Number(cartItem.quantity)
        totalPrice += cartItem.price * Number(cartItem.quantity)
    })

    return (
        <div className="flex-1 bg-white p-4 rounded shadow">
            <h1 className="text-xl font-semibold mb-4">Shopping Cart</h1>
            {
                cart.map((cartItem) => (
                    <CartProduct cartItem={cartItem} key={cartItem.id}/>
                ))
            }
            <div className="text-right mt-4">
                <p className="text-lg font-semibold">
                    Subtotal ({totalItems} items): ₹{totalPrice}
                </p>
            </div>
        </div>
    )
}