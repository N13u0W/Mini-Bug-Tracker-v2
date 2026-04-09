import { useEffect, useState } from "react";
import BugForm from "./components/Bugform";
import BugList from "./components/Buglist";
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
    setBugs = bugs.map(b => b.id === id ? {...b, status}: b);
  }; 
  
  const deleteBug = (id) => {
    setBugs(bugs.filter(b => b.id !== id));
  };

  return (
    <div>
      <h1>Bug Tracker</h1>
      <BugForm onAddBug={addBug} />
      <BugList
       bugs={bugs} 
       onUpdateStatus={updateStatus} 
       onDeleteBug={deleteBug} 
       />
    </div>
  );

};


export default App;