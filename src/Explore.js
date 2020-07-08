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

       console.log( this.props.location.books);
        console.log(this.props)
        return(
            <div>
                <label htmlFor="search" >Search the book </label>
                <input type = "text"  onChange={this.handleChange}></input>
                {this.props.location.books.map(book => (
                    <tr key={book}>
                        <td>
                            {book}
                        </td>
                        <td>
                            <button onClick={() => this.props.searchBook(book) }>Add</button>
                        </td>
                    </tr>
                )   
                    )
                }
            </div>
        )
    }

}

export default Explore;