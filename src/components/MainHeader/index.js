import React,{useState,useContext, useRef, useEffect} from 'react';
import "./index.scss";
import {SearchBar} from '../SearchBar';
import threedots from'../../dots.png';
import search from '../../search.png';
import {ProfileContext} from '../../constants/globalContext'

export default function MainHeader(props){
    const [showSearch, setOpenSearch] = useState(false)
    const context = useContext(ProfileContext);
    const searchInputRef = useRef(null);
    
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
                closeSearchInput()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchInputRef]);
    
    function closeSearchInput(){
            setOpenSearch(false)
    }

    return(
        <div className='main-header'>
            <div className='profile'>
                <div className="dp"></div>
                <div className="profile-name">{context.profile}</div>
            </div>
            <div className='options'>
                {showSearch && <SearchBar searchQuery={(query)=>props.searchQuery(query)} ref={searchInputRef}/> }
                {!showSearch &&<img src={search} alt="search" className='three-dot' onClick={()=>setOpenSearch(true)}/>}
                <img src={threedots} alt="fireSpot" className='three-dot'/>
            </div>
        </div>
    )
}