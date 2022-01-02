import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import Nopage from "./Components/Shared/Nopage/Nopage";
import AuthProvider from "./Context/AuthProvider";



function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route path='/404'><Nopage></Nopage></Route>
          <Route path='/*'><Nopage></Nopage></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
