import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Pupster from "./components/Pupster.js";
import Naver from "./components/Naver.js"
import About from "./components/pages/About.js";
import Discover from "./components/pages/Discover.js";
import Search from "./components/pages/Search.js";

const App = () => {
    return (
        <Router>
          <div>
            <Naver />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route path="/search" component={Search} />
          </div>
        </Router>
    )
}
<Pupster />;

export default App;
