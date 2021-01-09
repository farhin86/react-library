import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar';
import Chat from '../../components/Chat'
import "./index.scss"
export default function WhatsChat(props){
    const [query, setQuery] = useState('')
    return (
        <div className='whatschat-wrapper'>
        <SearchBar searchQuery={(query)=>setQuery(query)}/>
        <Chat query={query}/>
        </div>
    )
}