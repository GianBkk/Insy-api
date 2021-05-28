import React, {useState} from 'react'
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css'
import './Create.css'

const HahnCreate = () => {
    const [data, setData] = useState({
        sender_id: "",
        datum: "",
        temparatur: "",
        luftdruck: ""
    })
    const url ="https://api.chickentom.ga"

    function submit(e){
        e.preventDefault();
        axios.post(`${url}/create.php`,{
            sender_id: data.sender_id,
            datum: data.datum,
            temparatur: data.temparatur,
            luftdruck: data.luftdruck
        })
        .then(res=>{
            console.log(res.data)
            
        })
    }

    function dataHandler(e){
 
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <div className='form-container'>
            <h2>Create WeatherBox</h2>
            <form onSubmit={(e)=> submit(e)}>
                <div className='form-group'>
                    <input onChange={(e)=>dataHandler(e)} id="sender_id" value={data.sender_id} placeholder='Name' type="text" />
                    <input onChange={(e)=>dataHandler(e)} id="datum" value={data.datum}  placeholder='Name' type="date"  />
                    <input onChange={(e)=>dataHandler(e)} id="temparatur" value={data.temparatur} placeholder='Temparartur' type="text"  />
                    <input onChange={(e)=>dataHandler(e)} id="luftdruck" value={data.luftdruck} placeholder='Luftdruck' type="text"  />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default HahnCreate
