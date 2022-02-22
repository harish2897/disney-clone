
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';

// https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/src/components/Header.js

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
    <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/detail/:id" element={<Details/>}/>
        
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
