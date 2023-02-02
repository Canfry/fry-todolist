import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Todos from './pages/Todos';
import Register from './pages/Register';
import Signin from './pages/Signin';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
