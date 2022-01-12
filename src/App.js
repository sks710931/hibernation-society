import './App.css';
import {Layout} from './layout/layout';
import { Home } from './pages/home.page';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
