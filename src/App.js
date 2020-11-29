import "./App.css";
import dataFAQ from "./data/FAQ";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/ui/navbar/NavBar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Footer from "./components/ui/footer/Footer";
import FAQ from "./components/pages/FAQ";

function App() {
  return (
    <div className="App" dir="rtl">
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/FAQ">
              <FAQ data={dataFAQ} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
