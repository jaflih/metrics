import { Routes, Route } from 'react-router-dom';
import './App.css';
import { SymbolPage } from './components/SymbolPage';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SymbolPage />} />
        <Route path="/company/:name" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
