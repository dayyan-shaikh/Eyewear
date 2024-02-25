import './App.css';
import Navbar from './components/Navbar/Navbar';
import Collection from './components/Collection/Collection'
import Footer from './components/Footer/Footer';
// import {BrowserRouter,Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      {/* <BrowserRouter>
      <Routes>
        <Route exact  path="/" ></Route>
      </Routes>
      </BrowserRouter> */}
      <Collection />
      <Footer />
      
    </>
  );
}

export default App;
