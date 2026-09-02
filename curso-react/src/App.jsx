import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx';
import Auth from './pages/auth.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}
export default App;
