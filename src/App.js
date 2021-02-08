import './App.css';
import { BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import {AnimatePresence} from 'framer-motion'

function App() {

  

  return (
    <Router>
      <div style={{background:"grey", color:"whitesmoke"}}>
        <NavigationBar />
            <Wrapper>
              <AnimatePresence exitBeforeEnter>
                <Route exact path="/reactPortFolio" component={Home} />
                <Route exact path="/reactPortFolio/home" component={Home} />
                <Route exact path="/reactPortFolio/contact" component={Contact} />
                <Route exact path="/reactPortFolio/portfolio" component={Portfolio} />
              </AnimatePresence>
            </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
