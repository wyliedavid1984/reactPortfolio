import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PageHeader from "./components/PageHeader/PageHeader"

function App() {
  return (
    <Router>
      <div style={{background:"grey", color:"whitesmoke"}}>
        <NavigationBar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
