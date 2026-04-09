import BugItem from "./BugItem";

function BugList({ bugs, updateStatus, deleteBug }) {
    return (
        <div>
            {bugs.map((bug) => (
                <BugItem 
                key={bug.id} 
                bug={bug} 
                updateStatus={updateStatus} 
                deleteBug={deleteBug} 
                />
            ))}
        </div>  
    );
}

export default BugList;
