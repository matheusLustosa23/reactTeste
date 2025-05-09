import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskPage(){
    const navigate = useNavigate();
    const [sarchParams] = useSearchParams();
    const titile = sarchParams.get("title");
    const description = sarchParams.get("description");
    return <div className="h-screen w-screen bg-slate-500 p-6">

        <div className="w-[500px] space-y-4">
            <div className="flex justify-center relative mb-6">
                <button className="absolute left-0 text-slate-100" onClick={()=>navigate(-1)}><ChevronLeftIcon /></button>
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                Detalhes da Tarefa
                </h1>

            </div>

        <div className="bg-slate-200 p-4 rounded-md">
            <h2 className="text-xl font-bold text-white text-slate-600 ">{titile}</h2>
            <p className="text-slate-600">{description}</p>
        </div>
        
      </div>
        
    </div>
       
    
}

export default TaskPage;