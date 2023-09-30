import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegistrationPage from './Component/Account_Creation';
import Concept from './Component/Concept';
import Footer from './Component/Footer';
import Gold from './Component/Gold';
import Account from './Component/Login_Page';
import Ring from './Component/Ring';
import Header from './Component/Header';
import DiamondPage from './Component/Diamond';
import DiamondDataPage from './Component/DiamondData';
import GoldDataPage from './Component/GoldData';
import RingPage from './Component/RinData';


function App() {
 
  return (<div>
    <Header />
     <Routes>
     <Route path='/Component/Account_Creation' element={<RegistrationPage/>}  ></Route>
      <Route path='/Component/Concept' element={<Concept />}></Route>
      <Route path='/Component/Gold' element={<Gold />} ></Route>
      <Route path='/Component/Account' element={<Account />}></Route>
      <Route path='/Component/ContentPage' element={<DiamondPage />}></Route>
      <Route path='/Component/Ring' element={<Ring />}  ></Route>
      <Route path='/Component/Login_Page' element={<Account />}  ></Route>
      <Route path='/Component/DiamondData' element={<DiamondDataPage />} ></Route>
      <Route path='/Component/GoldData' element={<GoldDataPage />} ></Route>
      <Route path='/Component/RingData' element={<RingPage />} ></Route>
    </Routes>
    <Footer/>
  </div>);
}

export default App;
