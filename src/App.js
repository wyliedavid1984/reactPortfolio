import './App.css';
import { Route, Switch, useLocation} from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import {AnimatePresence} from 'framer-motion'

function App() {
  let location = useLocation();
  return (
      <div style={{background:"grey", color:"whitesmoke"}}>
        <NavigationBar />
            <Wrapper>
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/reactPortFolio">
                    <Home />
                  </Route> 
                  <Route exact path="/reactPortFolio/home">
                    <Home />
                  </Route>
                  <Route exact path="/reactPortFolio/contact">
                    <Contact />
                  </Route>
                  <Route exact path="/reactPortFolio/portfolio">
                    <Portfolio />
                  </Route>
                </Switch>
              </AnimatePresence>
            </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
