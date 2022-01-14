import { Routes, Route } from 'react-router-dom';
import './App.css';
import {Layout} from './layout/layout';
import { Home } from './pages/home.page';
import {Members} from "./pages/members";
import { StoryWall } from './pages/storywall';
import {Presale} from "./pages/presale";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEagerConnect } from "./connectors/use-eager-connect";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}


 function App() {
  useEagerConnect();
  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
      <ToastContainer pauseOnHover />
      <Layout>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/story-wall" element={<StoryWall />} />
          <Route path="/presale" element={<Presale />} />
       </Routes>
      </Layout>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
