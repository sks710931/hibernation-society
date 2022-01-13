import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Layout} from './layout/layout';
import { Home } from './pages/home.page';
import {Members} from "./pages/members";
import { StoryWall } from './pages/storywall';

function App() {
  return (
    <div className="App">
      <Layout>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/story-wall" element={<StoryWall />} />
       </Routes>
      </Layout>
    </div>
  );
}

export default App;
