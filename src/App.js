import './App.css';
import Profile from './components/profile/Profile';
import { useEffect, useState } from 'react';
import { data } from './data';
import Table from './components/table/Table';


function App() {
  const [Data, setData] = useState({})
  useEffect(() => {
    setData(data);

    return () => {

    }
  }, [])

  return (
    <div className="App">
      <Profile name={Data.name} cId={Data.cId} />
      <Table vendors={Data.vendors} />
    </div>
  );
}

export default App;
