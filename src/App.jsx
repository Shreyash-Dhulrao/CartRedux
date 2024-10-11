import { BrowserRouter  , Route , Routes} from "react-router-dom"
import Cart from './components/Cart'
import CartItem from './components/cartItem'
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/" element={<><Navbar /><CartItem /></>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
