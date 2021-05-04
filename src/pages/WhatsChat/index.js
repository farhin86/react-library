import React, { useState } from 'react'
import MainHeader from '../../components/MainHeader';
import Chat from '../../components/Chat'
import "./index.scss"
import {themes,ProfileContext } from '../../constants/globalContext'

export default function WhatsChat(props){
    const [query, setQuery] = useState('');
    const [profile, setProfile]= useState("Farhin")
    const [currTheme, setTheme]= useState(themes.dark)

    return (
      <ProfileContext.Provider value={{ theme: currTheme, profile:profile}}>
          <div className='whatschat-wrapper'>
              <MainHeader searchQuery={(query)=> setQuery(query)}/>
              <Chat query={query} />
          </div>
      </ProfileContext.Provider>
  )
    // return (
    //     <ProfileContext.Consumer >
    //     {({theme, profile}) =>
    //         <div className='whatschat-wrapper'>
    //             <MainHeader profile={profile}/>
    //             <Chat query={query} theme={theme}/>
    //         </div>
    //     }
    //     </ProfileContext.Consumer>
    // )
}