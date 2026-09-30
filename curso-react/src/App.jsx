import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';
import Painel from './pages/Painel.jsx';
import {Template} from './components/Template';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/painel" element={<Painel />} />
       <Route path="/Template" element={<Template />} />
    </Routes>
  );
}
export default App;
