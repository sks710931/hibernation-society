import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Layout} from './layout/layout';
import { Home } from './pages/home.page';

function App() {
  return (
    <div className="App">
      <Layout>
       <Routes>
          <Route path="/" element={<Home />} />
       </Routes>
      </Layout>
    </div>
  );
}

export default App;
