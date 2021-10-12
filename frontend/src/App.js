import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import { HomeScreen } from './screens/HomeScreen';
import CreatePostScreen from './screens/CreatePostScreen';


function App() {
  return (
    <Router>
      <main className="py-3">
        <Container >
          <Route path='/' component={HomeScreen} exact />
          <Route path='/createpost' component={CreatePostScreen} />
        </Container>
      </main>
    </Router >
  );
}

export default App;
