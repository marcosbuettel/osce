import { useState } from 'react';
import Home from './components/Home/Home';
// import Test from './components/Test/Test';
import CicloClinico from './components/CicloClinico/CicloClinico';
import Header from './components/Header/Header';

function App() {
  const [tab, setTab] = useState(false);

  return (
    <div>
      <Header setTab={setTab} />
      {!tab ? <Home /> : <CicloClinico />}
    </div>
  );
}

export default App;
