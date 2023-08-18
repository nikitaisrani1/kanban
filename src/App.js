import ColHeader from './Components/ColHeader.js'
import './App.css';
import { useEffect,useState } from 'react';
import Header from './Components/Header.js';
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [select1, setSelect1] = useState("Status");
  const [select2, setSelect2] = useState("Priority");
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  useEffect(()=>
  {
    console.log(select1);
    console.log(select2);
  },[select1,select2])
  return (
    <div className="App">
      <Header select1={select1} select2={select2} setSelect1={setSelect1} setSelect2={setSelect2}/>
      <br></br>
      <ColHeader/>
    </div>
  );
}

export default App;
