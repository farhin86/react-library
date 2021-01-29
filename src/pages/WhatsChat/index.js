import React, { useState } from 'react'
import MainHeader from '../../components/MainHeader';
import Chat from '../../components/Chat'
import "./index.scss"


export default function WhatsChat(props){
    const [query, setQuery] = useState('')
    return (
        <div className='whatschat-wrapper'>
            <MainHeader/>
            <Chat query={query}/>
        </div>
    )
}