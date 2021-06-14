import './App.css';
import ProductContextProvider from "./contexts/ProductContext";
import CategoryContextProvider from "./contexts/CategoryContext";
import {BrowserRouterComponent} from "./components/Navbar/BrowserRouterComponent";
import {CookiesProvider} from "react-cookie";

function App() {
  return (
    <div className="App bg-success">
      <CookiesProvider>
        <ProductContextProvider>
          <CategoryContextProvider>
            <BrowserRouterComponent/>
          </CategoryContextProvider>
        </ProductContextProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
