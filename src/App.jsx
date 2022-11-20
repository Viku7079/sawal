import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Error from './Error';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/error' element={<Error/>}/>
          <Route path='*' element={<Navigate to="/error"/>} />
          <Route path='/*' element={<Navigate to="/error"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
