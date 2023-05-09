import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from './Pages/RegistrationPage';
import "./App.css";
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <RegistrationPage/>
            }
          />

          {/* <Route
            exact
            path="/business"
            element={
              <TrackingPage/>
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App

