import { useState } from "react";

function BugForm({ addBug }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Low"
  });
  
const handleSubmit = (e) => {
    e.preventDefault();
    addBug({
        ...form,
        id: Date.now(),
        status: "Open"
    });

    setForm({
        title: "",
        description: "",
        priority: "Low"
    });

};

return (
    <form onSubmit={handleSubmit}>
        <input 
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

        <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
        <select
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button type="submit">Add Bug</button>
            </form>

);
}

export default BugForm;