import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter';
import HeaderComponent from './components/molecules/HeaderComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
