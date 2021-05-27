import './App.css';
import SetProducts from './containers/SetProducts.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductComponent from './containers/ProductComponent';
import Header from './containers/Header'
import ProductDetail from './containers/ProductDetail'
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={SetProducts} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
