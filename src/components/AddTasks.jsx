
import {useState} from "react";
import Input from "./Input_temp";



function AddTasks({ onTaskAddSubmit }){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    console.log(title, description);


    return(
        <div  className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input type="text"  placeholder="Digite o titulo da tarefa"   value={title} 
            onChange={(event) => setTitle(event.target.value)}
            />

     

            <Input type="text" name="" id="" placeholder="Digite a descrição da tarefa" className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
            <button onClick={() => {

                if(!title.trim() || !description.trim()){
                     return alert("Preencha todos os campos")
                    };

                onTaskAddSubmit(title,description)

                setTitle("");
                setDescription("");
                }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
        </div>
    );
}

export default AddTasks