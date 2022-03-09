import { Routes, Route } from 'react-router-dom';
import './App.css';
import { SymbolPage } from './components/SymbolPage';
import Profile from './components/Profile';
import NotMatch from './components/pages/NotMatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/metrics/" element={<SymbolPage />} />
        <Route path="/metrics/company/:name" element={<Profile />} />
        <Route path="/metrics/*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
