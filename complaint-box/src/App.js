
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import CarouselComp from './components/CarouselComp';
import AppAbout from './components/about';
import LodgeComplaint from './components/LodgeComplaint';
import Category from "./components/Category"
import MissingForm1 from "./components/MissingForm1"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FraudForm1 from './components/FraudForm1';
import AccidentForm1 from './components/AccidentForm1';
import LoginSignUp from './components/Admin'
import OtherCompForm1 from './components/OtherCompForm1';
function App() {
  return (
    // <div className="App">
    //   <header id="header">
    //     <AppHeader />
    //   </header>
    //   <main>
    //     <AppHero />
    //     <AppAbout />
    //   </main>
    // </div>
    <Router>
      <header> <AppHeader /></header>
      <Routes>
        <Route path="/" element={<CarouselComp />} />
        <Route path="/lodgecomplaint" element={<LodgeComplaint />} />
        <Route path="/aboutus" element={<AppAbout />} />
        <Route path="/category" element={<Category />} />
        <Route path="/form1" element={<MissingForm1 />} />
        <Route path="/form2" element={<FraudForm1 />} />
        <Route path="/form3" element={<AccidentForm1 />} />
        <Route path="/form4" element={< OtherCompForm1 />} />
        <Route path="/admin" element={<LoginSignUp />} />

      </Routes>
    </Router>
  );
}

export default App;
