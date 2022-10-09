import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles.css';
import Userform from './Userform';
import Usertable from './Usertable';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Usertable />}></Route>
        <Route exact path='/userform/:action' element={<Userform />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
