import React from 'react'
import { useHistory } from "react-router-dom";




const Card = (props) => {

    const history = useHistory();
    

    return (
        <div className={props.temparatur > 1 ? 'card-container container-warm' : 'card-container container-cold'} onClick={() => history.push(`/edit/${props.mainid}`)}>
            <div className='card-info'>
                <h1 className='card-title'>{props.title}</h1>
                <h3 className='card-date'>{props.datum}</h3>
            </div>
            <img className='card-icon' src={props.temparatur > 1 ? `/images/sun.svg` : `/images/freeze.svg`} alt="Icon" />
            <h1 className='card-temp'>{props.temparatur} ℃</h1>
            <h3 className='card-luft'>{props.luftdruck} bar</h3>

        </div>
    )
}

export default Card
