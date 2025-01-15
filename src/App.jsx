import Header from "./components/Header"
import Prod from "./components/ProdList"
import Footer from "./components/Footer"
import Main from "./components/main/Main"
import Routes from "./routes/Routes"
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
