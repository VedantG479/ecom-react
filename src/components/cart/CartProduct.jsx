export default function CartProduct({cartItem}) {
    return (
        <div className="flex gap-4 border-b py-4">

            <img src="https://via.placeholder.com/150"
                className="w-32 h-32 object-contain" />

            <div className="flex flex-col flex-1">

                <h2 className="text-sm font-medium text-gray-800">
                    Wireless Bluetooth Headphones with Noise Cancellation
                </h2>

                <p className="text-xs text-green-600 mt-1">In stock</p>

                <p className="text-xs text-gray-500 mt-1">Eligible for FREE delivery</p>

                <div className="flex items-center gap-3 mt-3">

                    <select className="border rounded px-2 py-1 text-sm">
                        <option>Qty: 1</option>
                        <option>Qty: 2</option>
                        <option>Qty: 3</option>
                    </select>

                    <button className="text-blue-600 text-sm hover:underline">
                        Delete
                    </button>

                    <button className="text-blue-600 text-sm hover:underline">
                        Save for later
                    </button>

                </div>

            </div>

            <div className="text-right">
                <p className="text-lg font-semibold">₹1,499</p>
            </div>

        </div>
    )
}