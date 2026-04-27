import FiltersBar from "../components/product/FiltersBar"
import ProductList from "../components/product/ProductList"

function Home(){
    return (
        <div className="flex">
            <FiltersBar />
            <ProductList/>
        </div>
    )
}

export default Home
