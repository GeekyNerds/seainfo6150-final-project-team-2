import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// header
import Header from "./Header/Header";

// footer
import Footer from "./Footer/Footer";

// nav
import MainNav from "./MainNav/MainNav";

// pages
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";
import CalendarPage from "./CalendarPage/CalendarPage";
import DegreePage from "./DegreePage/DegreePage";
import DegreesPage from "./DegreesPage/DegreesPage";
import EnrollPage from "./EnrollPage/EnrollPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import HomePage from "./HomePage/HomePage";
import SchoolsPage from "./SchoolsPage/SchoolsPage";

// data
import dates from "./data/calendar.json";
import schools from "./data/schools.json";
import degrees from "./data/degrees.json";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          {/* This is a page header that will persist on every page */}
          {/* <MainNav /> */}
          {/* <hr /> */}
          <Header />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/schools"
              exact
              render={() => <SchoolsPage degrees={degrees} schools={schools} />}
            />
            <Route
              path="/degrees"
              exact
              render={() => <DegreesPage degrees={degrees} schools={schools} />}
            />
            <Route
              path="/degree/:slug"
              exact
              render={({ match }) => (
                <DegreePage
                  degree={
                    degrees.filter(
                      degree => degree.slug === match.params.slug
                    )[0]
                  }
                  schools={schools}
                />
              )}
            />
            <Route
              path="/enroll/:slug"
              exact
              render={({ match }) => (
                <EnrollPage
                  degree={
                    degrees.filter(
                      degree => degree.slug === match.params.slug
                    )[0]
                  }
                />
              )}
            />
            <Route
              path="/calendar"
              exact
              render={() => <CalendarPage dates={dates} />}
            />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route component={ErrorPage} />
          </Switch>
        </main>
      
        {/* <hr /> */}
        {/* This is a page footer that will persist on every page */}
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
