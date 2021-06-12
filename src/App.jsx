import './App.css';
import ProductContextProvider from "./contexts/ProductContext";
import CategoryContextProvider from "./contexts/CategoryContext";
import {BrowserRouterComponent} from "./components/Navbar/BrowserRouterComponent";

function App() {
  return (
    <div className="App bg-success bg-gradient">
      <ProductContextProvider>
        <CategoryContextProvider>
          <BrowserRouterComponent/>
        </CategoryContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
