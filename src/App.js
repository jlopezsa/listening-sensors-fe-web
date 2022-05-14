import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
