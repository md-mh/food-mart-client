import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Account/Login";
import Registration from "./Components/Account/Registration";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import Nopage from "./Components/Shared/Nopage/Nopage";
import PrivateRoute from "./Components/Route/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import Dashboard from "./Components/Dashboard/Dashboard";
import PlaceOrder from "./Components/UserUI/PlaceOrder/PlaceOrder";
import Home from "./Components/UserUI/Home/Home";
import Products from "./Components/UserUI/Products/Products";
import Contact from "./Components/UserUI/Contact/Contact";


function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"> <Home></Home> </Route>
          <Route path="/home"> <Home></Home></Route>
          <Route path="/foods"> <Products></Products> </Route>
          <Route path="/contact"> <Contact></Contact> </Route>
          <Route path="/login"> <Login></Login></Route>
          <Route path="/registration"> <Registration></Registration> </Route>
          <PrivateRoute path="/placeOrder/:id"> <PlaceOrder></PlaceOrder> </PrivateRoute>
          <PrivateRoute path="/dashboard"> <Dashboard></Dashboard> </PrivateRoute>


          <Route path='/404'><Nopage></Nopage></Route>
          <Route path='/*'><Nopage></Nopage></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
