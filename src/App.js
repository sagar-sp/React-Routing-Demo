import { Redirect, Route, Switch } from "react-router-dom";
import Products from "./Pages/Products";
import Welcome from "./Pages/Welcome";
import ProductDetails from "./Pages/ProductDetails";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </>
  );
}
export default App;
