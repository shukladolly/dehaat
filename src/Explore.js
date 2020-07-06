import React, { Component } from 'react';
// var libgen  = require("libgen.js")
  


class Explore extends Component {
    constructor(props){
        super(props);
        this.state = {
            explore: false,
            redirect: false,
        }
    }

    componentDidMount(){

    }

    handleChange = (event) =>{
        console.log("event  is ", event.target.value);
      }



    render(){
        return(
            <div>
                <p>HELLO</p>
                <label htmlFor="search" >Search the book </label>
                <input type = "text"  onChange={this.handleChange}></input>
            </div>
        )
    }

}

export default Explore;