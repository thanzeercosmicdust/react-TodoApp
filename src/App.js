import Todo from "./component/Todo";
import Header from "./component/header/Header";
import About from "./component/about/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Route path="/" exact component={Todo}/>
          <Route path="/about" component={About}/>
      </Router>
    </div>
  );
}

export default App;
