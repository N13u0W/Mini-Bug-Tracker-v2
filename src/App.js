import { useEffect, useState } from "react";
import BugForm from "./components/BugForm";
import BugList from "./components/BugList";
import {getBugs, saveBugs} from "./utils/storage";

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    setBugs(getBugs());
  }, []);

  useEffect(() => {
    saveBugs(bugs);
  }, [bugs]);

  const addBug = (bug) => {
    setBugs([...bugs, bug]);  
  };

  const updateStatus = (id, status) => {
    setBugs(bugs.map(b => b.id === id ? { ...b, status } : b));
  }; 
  
  const deleteBug = (id) => {
    setBugs(bugs.filter(b => b.id !== id));
  };

  return (
    <div>
      <h1>Bug Tracker</h1>
      <BugForm addBug={addBug} />
      <BugList
       bugs={bugs} 
       updateStatus={updateStatus} 
       deleteBug={deleteBug} 
       />
    </div>
  );

};


export default App;