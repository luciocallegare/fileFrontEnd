import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header></Header>
      <Table></Table>
    </BrowserRouter>
    </div>
  );
}

export default App;
