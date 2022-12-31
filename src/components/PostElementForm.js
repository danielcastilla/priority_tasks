import React,{useState} from 'react';
import Axios from 'axios';

function PostElementForm(props) {
    const url = ""
    const [data, setData] = useState({
        titular: "",
        descripcion: "",
        fechaAlta: "",
        tags: "",
        iduser: ""
    })

    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            titular: data.name,
            descripcion: data.date,
            fechaAlta: data.fechaAlta,
            tags: data.tags,
            iduser: data.iduser
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    return (
        <div>
            <form onSubmit={(e)=> submit(e)}> 
                <input onChange={(e)=>handle(e)} id="titular" value={data.titular} placeholder="name" type="text"></input>
                <input onChange={(e)=>handle(e)} id="descripcion" value={data.descripcion} placeholder="text" type="text"></input>
                <input onChange={(e)=>handle(e)} id="tags" value={data.tags} placeholder="tags" type="text"></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default PostElementForm;