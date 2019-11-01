import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from '../src/components/navbar.component';
import CreateExercise from '../src/components/create-exercise.component';
import CreateUser from '../src/components/create-user.component';
import EditExercise from '../src/components/edit-exercise.component';
import ExercisesList from '../src/components/exercises-list.component';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
    </div>
    </Router>
  );
}

export default App;
