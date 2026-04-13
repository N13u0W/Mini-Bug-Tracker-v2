function BugItem({ bug, updateStatus, deleteBug }) {

    return (
        <div className={`bug-item status-${bug.status.toLowerCase().replace(" ", "")}`}>
            <h3>{bug.title}</h3>
            <p>{bug.description}</p>
            <p>Priority: {bug.priority}</p>
            <p>Status: {bug.status}</p>

            <select 
                value={bug.status}
                onChange={(e)=> updateStatus(bug.id, e.target.value)}
            >
                <option>Open</option>
                <option>In Progress</option>
                <option>Done</option>
            </select>

            <button 
                className="btn-delete"
                onClick={() => deleteBug(bug.id)}
            >
                Delete
            </button>
        </div>
    );
}

export default BugItem;