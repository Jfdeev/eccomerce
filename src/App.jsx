import Routes from "./routes/Routes"
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./constants/cartContext";


function App() {

  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <Routes />
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App;
