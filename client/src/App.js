import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing pages
import LandingPage from "./pages/landingPage"; 
import ResourcesPage from "./pages/resourcesPage";
import ResourcePage from "./pages/resourcePage";
import HallOfFamePage from "./pages/hallOfFame";
import BlogPins from "./pages/blogPins";
import AlumniPage from './pages/alumniPage';
import DevTeam from "./pages/devTeam";

// importing components
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import TeamPage from './pages/teamPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          {/* <Route path="/wall-of-fame" component={HallOfFamePage}></Route> */}
          <Route path="/team" component={TeamPage}></Route>
          {/* <Route path="/alumni" component={AlumniPage}></Route> */}
          <Route path="/resources/:type" component={ResourcePage}></Route>
          <Route path="/resources" component={ResourcesPage}></Route>
          {/* <Route path="/blog" component={BlogPins}></Route> */}
          <Route path="/dev-team" component={DevTeam}></Route> 
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
