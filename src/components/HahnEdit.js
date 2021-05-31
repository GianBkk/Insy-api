import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

    


const HahnEdit = () => {
    
    const [loading, setLoading] = useState(false);
    const [sender_id, setSender_id] = useState(null);
    const [datum, setDatum] = useState(null);
    const [temparatur, setTemparatur] = useState(null);
    const [luftdruck, setLuftdruck] = useState(null);
    const {id}  = useParams();
    
    const history = useHistory();
    
    const url = 'https://api.chickentom.ga'

    
   

    const getData = async () => {
        try {
            const res = await axios.get(`${url}/read.php?id=${id}`)
            
            setSender_id(res.data[0].sender_id)
            setDatum(res.data[0].datum)
            setTemparatur(res.data[0].temparatur)
            setLuftdruck(res.data[0].luftdruck)
        } catch (err) {
            alert(err.message);
        }
    }

        const submitHandler = async (e) => {
            setLoading(true);
            e.preventDefault();
            

            const dataPut = {
                id : id,
                fields: [{
                    sender_id: sender_id,
                    datum: datum,
                    temparatur: temparatur,
                    luftdruck: luftdruck
                }]
                
            }
           await axios.put(`${url}/update.php`, dataPut)
            .then(res=>{
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    history.push(`/`)
                }, 2000)
                
            })}
        const delHandler = async (e) => {
            e.preventDefault();
            await axios.delete(`${url}/delete.php`, {data: {id : id}})
            .then(res=>{
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    history.push(`/`)
                }, 2000)
                console.log(res.data)
            })}
        

        useEffect(() => {    
            getData();
        },[])
    return (
        
        <div className='form-container'>
            <h2>Create WeatherBox</h2>                                        
            <form>

                <div className='form-group'>
                    <input onChange={e => setSender_id(e.target.value)} id="sender_id" value={sender_id} placeholder='Name' type="text" />
                    <input onChange={e => setDatum(e.target.value)} id="datum" value={datum} placeholder='Date' type="date" />
                    <input onChange={e => setTemparatur(e.target.value)} id="temparartur" value={temparatur} placeholder='Enter Temparatur' type="text" />
                    <input onChange={e => setLuftdruck(e.target.value)} id="luftdruck" value={luftdruck} placeholder='Enter Luftdruck' type="text" />
                </div>
                <button type="submit" onClick={submitHandler} disabled={loading} >{loading ? 'Loading...' : 'Update'}</button>
                <input type='button' className='butt' value='Delete' onClick={delHandler}/>
            </form>
        </div>
    )
}

export default HahnEdit;
