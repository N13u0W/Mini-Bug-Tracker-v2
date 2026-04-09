function BugItem({ bug, updateStatus }) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h3>{bug.title}</h3>
            <p>{bug.description}</p>
            <p>Priority: {bug.priority}</p>
            <p>Status: {bug.status}</p>

            <select onChange={(e)=> updateStatus(bug.id,e.target.value)}>
                <option>Open</option>
                <option>In Progress</option>
                <option>Done</option>
            </select>

            <button onClick={() => deleteBug(bug.id)}>Delete</button>
        </div>
    );
}

export default BugItem;