import { Route, Switch } from 'react-router';
import './App.css'
import { MainPage } from './pages/MainPage/MainPage';
import { OrderPage } from './pages/OrderPage/OrderPage';

function App() {

  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/order">
        <OrderPage />
      </Route>
    </Switch>
  );
}

export default App;
