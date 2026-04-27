import CartSummary from "../components/cart/CartSummary";
import PaymentSummary from "../components/cart/PaymentSummary";

export default function Cart() {
    return (
        <div className="max-w-7xl mx-auto p-4 flex flex-col lg:flex-row gap-6">
            <CartSummary/>
            <PaymentSummary/>
        </div>
    )
}