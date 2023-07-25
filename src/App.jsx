
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductGallery from "./pages/ProductGallery"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import  {store} from "./store/store"
import Checkout from "./components/Checkout"

function App() {
  return (
    <>
    <Provider store= {store} >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={
          <>
          <Checkout />
          <ProductGallery /> 
          </>
        } />
        </Routes>

        <Footer />
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
