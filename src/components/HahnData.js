import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Cards/Card'


const HahnData = () => {
    const [data, setData] = useState([])
    

    const url = 'https://api.chickentom.ga'

    const getData = async () => {
        try {
            const res = await axios.get(`${url}/read.php`)
            setData(res.data)
        } catch (err) {
            alert(err.message);
        }
    }
    
    
    useEffect(() => { 
        getData();      
    }, [data])
    
        return (
            <div className='card-grid'>
                {data.map((item) => {
                    return(
                        <>                         
                            <Card
                            title={item.sender_id}
                            datum={item.datum}
                            temparatur={item.temparatur}
                            luftdruck={item.luftdruck}
                            mainid={item._id.$oid}
                            />
                        </>
                    )})}
            </div>
        )
    
}

export default HahnData
