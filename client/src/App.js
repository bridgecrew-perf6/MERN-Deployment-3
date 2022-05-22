import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import {Switch, Route, Link} from "react-router-dom";
import CreateProduct from './views/CreateProduct';
import OneProduct from './views/OneProduct';
import EditProduct from './views/EditProduct';


function App() {
  return (
    <div className="App">
      <div className='w-25 d-flex justify-content-center mx-auto'>
        <Link className="m-3 btn-primary" to="/">Home</Link>
        <Link className="m-3 btn-info" to="createProduct">Create a Product</Link>
      </div>
        <Switch>
        <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/createProduct">
            <CreateProduct/>
          </Route>

          <Route exact path="/products/:_id">
            <OneProduct/>
          </Route>

          <Route exact path="/products/:_id/editProduct">
            <EditProduct/>
          </Route>


        </Switch>
    </div>
  );
}

export default App;
