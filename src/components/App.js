import React, {useState, useEffect} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    fetch('http://localhost:8004/poems')
    .then((res)=>res.json())
    .then((data)=>{
      setPoems(data)

    })

  },[])



  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={(e)=>{setShowForm(true)}}>Show/hide new poem form</button>
        {showForm ? <NewPoemForm setPoems={setPoems} /> : null}
        
      </div>
      <PoemsContainer poems={poems} setPoems={setPoems} />
    </div>
  );
}

export default App;
