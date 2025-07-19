import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Faq from './Faq';
import Contact from './Contact';
import Login from './Login';
import Welcome from './Welcome';
import PaySlip from './PaySlip';
import ResultPay from './ResultPay';

const App = () => {
  return(
    <div>
      <table border="3px">
        <tr>
          <Link to = "/"><td>Home</td></Link>
          <Link to = "/faq"><td>Faq</td></Link>
          <Link to = "/contact"><td>Contact</td></Link>
          <Link to = "/login"><td>Login</td></Link>
        </tr>
      </table>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/faq" element = {<Faq/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/welcome" element = {<Welcome/>}/>
        <Route path = "/payslip" element = {<PaySlip/>}/>
        <Route path = "/resultpay" element = {<ResultPay/>}/>
      </Routes>
    </div>
  )
}

export default App;
