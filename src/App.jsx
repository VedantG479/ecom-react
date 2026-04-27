import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Header from './components/common/Header'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
        </Routes>
    </Provider>
  )
}

export default App
