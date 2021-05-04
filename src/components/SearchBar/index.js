import React,{useState} from 'react'
import "./index.scss"

export const SearchBar = React.forwardRef((props, ref) => {
    const debounce=(fn, delay)=>{
        let timedId;
        return function(...args){
            clearTimeout(timedId)
            timedId= setTimeout(()=>fn(...args),delay)
        }
    }
    //const debounce = (func, delay) => {
    //     let inDebounce
    //     return function() {
    //       const context = this
    //       const args = arguments
    //       clearTimeout(inDebounce)
    //       inDebounce = setTimeout(() => func.apply(context, args), delay)
    //     }
    //   }

    const throttle = (func, limit) => {
        let inThrottle
        return function() {
          const args = arguments
          const context = this
          if (!inThrottle) {
            func.apply(context, args)
            inThrottle = true
            setTimeout(() => inThrottle = false, limit)
          }
        }
      }
    const handleSearch = (event) => {
        let searchString = event.target.value;
        props.searchQuery(searchString)
        console.log("searching...",searchString);
    }
    return(
        <>
            <input ref={ref} className='debounce-search' placeholder="Search using debounce 3sec"  onChange={debounce((e)=>handleSearch(e), 3000)}/>
            {/* <input placeholder="Search using throttling 3sec" onChange={this.throttle((e)=>this.handleSearch(e), 3000)}/> */}
        </>
    )
})