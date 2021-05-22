import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ProductsList from './components/ProductsList';
import Welcome from "./components/Welcome";
import CategoriesList from "./components/CategoriesList";
import UserAddressesList from "./components/UserAddressesList";


function App() {
  return (
    <div className="App bg-success bg-gradient">
      <BrowserRouter>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/list">Categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product/list">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/address/list">Addresses</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/category/list">
            <CategoriesList />
          </Route>
          <Route path="/product/list">
            <ProductsList />
          </Route>
          <Route path="/address/list">
            <UserAddressesList />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
