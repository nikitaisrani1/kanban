import ColHeader from './Components/ColHeader.js'
import './App.css';
import { useEffect,useState } from 'react';
import Header from './Components/Header.js';
function App() {
  const [data, setData] = useState([]);
  const [select1, setSelect1] = useState("status");
  const [select2, setSelect2] = useState("priority");
  const [isVisible, setIsVisible] = useState(false);

  const handleFadeIn = () => {
    setIsVisible(true);

    // Reset visibility after 1 second
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  };
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setData(data);
        // console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // useEffect(()=>
  // {
  //   console.log(select1);
  //   console.log(select2);
  // },[select1,select2]);
  
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@300&display=swap');
      </style>
      <Header select1={select1} select2={select2} setSelect1={setSelect1} setSelect2={setSelect2} handleFadeIn={handleFadeIn}/>
      <br></br>
      <ColHeader data={data}  select1={select1} select2={select2} />
      <div className={`fade-text ${isVisible ? 'visible' : ''}`}>Can't select Priority for grouping and sorting at once.</div>
    </div>
  );
}

export default App;
