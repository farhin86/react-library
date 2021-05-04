import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './index.scss'

export default function Position(params) {
    const position= useSelector(state => state.userPosition)
    const dispatch = useDispatch()
    return <div className='position-wrapper'>
        <div className='button-wrapper'>
        <button onClick={()=>dispatch({type:'SDE1'})}>SDE1</button>
        <button onClick={()=>dispatch({type:'SDE2'})}>SDE2</button>
        </div>
        <div>{position}</div>
    </div>
}