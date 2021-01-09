import React,{Component} from 'react'
import "./index.scss"
export default class SearchBar extends Component{

    debounce=(fn, delay)=>{
        let timedId;
        return function(...args){
            clearTimeout(timedId)
            timedId= setTimeout(()=>fn(...args),delay)
        }
    }
    // debounce = (func, delay) => {
    //     let inDebounce
    //     return function() {
    //       const context = this
    //       const args = arguments
    //       clearTimeout(inDebounce)
    //       inDebounce = setTimeout(() => func.apply(context, args), delay)
    //     }
    //   }

    throttle = (func, limit) => {
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
    handleSearch = (event) => {
        let searchString = event.target.value;
        this.props.searchQuery(searchString)
        console.log("searching...",searchString);
    }
    render(){
        return(
            <>
                <input placeholder="Search using debounce 3sec" onChange={this.debounce((e)=>this.handleSearch(e), 3000)}/>
                <input placeholder="Search using throttling 3sec" onChange={this.throttle((e)=>this.handleSearch(e), 3000)}/>
            </>
        )
    }
}