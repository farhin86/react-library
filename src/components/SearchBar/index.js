import React,{Component} from 'react'

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
    handleSearch = (event) => {
        let searchString = event.target.value;
        console.log("searching...",searchString);
    }
    render(){
        return(
            <input placeholder="Search" onChange={this.debounce((e)=>this.handleSearch(e), 2000)}/>
        )
    }
}