import React,{useState} from 'react';
import "./index.scss";
import SearchBar from '../SearchBar';
import threedots from'../../dots.png';
import search from '../../search.png'

export default function MainHeader(props){
    const [showSearch, setOpenSearch] = useState(false)
    const [query, setQuery] = useState('')
function setSearch(){
    if(showSearch)
setOpenSearch(false)
}
    return(
        <div className='main-header' onClick={setSearch}>
            <div className='profile'>
                <div className="dp"></div>
                <div className="profile-name">Farhin</div>
            </div>
            <div className='options'>
                {showSearch && <SearchBar searchQuery={(query)=>setQuery(query)}/> }
                {!showSearch &&<img src={search} alt="search" className='three-dot' onClick={()=>setOpenSearch(true)}/>}
                <img src={threedots} alt="fireSpot" className='three-dot'/>
            </div>
        </div>
    )
}