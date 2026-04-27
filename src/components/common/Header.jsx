import { Link } from "react-router"

function Header() {
    return (
        <>
            <header className="bg-white shadow p-4 flex justify-between items-center">
                <Link to='/' className="text-lg font-semibold hover:underline">Shop Products</Link>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded px-3 py-1 w-1/3"
                />
                <Link to='/cart' className="font-medium hover:underline">Cart</Link>
            </header>
        </>
    )
}

export default Header