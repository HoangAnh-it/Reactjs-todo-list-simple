import logo from '../logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import '../styles/App.scss';
import Nav from './nav/Nav.js';
import Home from './components/Home.js';
import ListToDo from './components/ListToDoComponent.js';
import About from './components/About.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
            <Nav/>
            <img src={logo} className="App-logo" alt="logo" />
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/todo' element={<ListToDo />}></Route>
                <Route path='/about' element={<About />}></Route>
            </Routes>
        </BrowserRouter>


      </header>

    </div>
  );
}

export default App;
