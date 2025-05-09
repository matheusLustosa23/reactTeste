import { ChevronRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom";
import Buttoms from "./Buttoms";









function Tasks({tasks, onTaskClick, onTaskDelete}){
    const navigate = useNavigate();
    function onSeeDetailsClick(task){
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/tasks?${query.toString()}`)
    }
    


   
    

    return(
        
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => 
            <li key={task.id} className="flex gap-2">
            <button className={`bg-slate-400 w-full text-white p-2 rounded-md text-left ${task.isCompleted && "line-through"}`}  onClick={()=>onTaskClick(task.id)}
            > 
            {task.title}

            
            
            </button>   
            
          
           
            <Buttoms onClick={()=>onSeeDetailsClick(task)}><ChevronRightIcon /></Buttoms>
            <Buttoms onClick={() => onTaskDelete(task.id)}><TrashIcon /></Buttoms>
            </li>
            )}
        </ul>
    )
}
export default Tasks