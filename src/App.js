import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './pages/home/Home';
import Agents from './pages/agents/Agents';
import Footer from './components/footer/Footer';
import NewHome from './components/newhome/NewHome';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* loads page from the top */}
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/agents'>
          <Agents />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <NewHome />
      <Footer />
    </Router>
  );
}

export default App;
