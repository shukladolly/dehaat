import React, { Component } from 'react';
import Explore from './Explore';
import {Link, Redirect} from "react-router-dom";



class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            explore: false,
            redirect: false,
            books: ["book1", "book2", "book3", "book4", "book5", "book6", "book7", "book8", "book9"]
        }
    }


    handleClick(event){
        this.setState(prevState => ({
            explore: !prevState.explore
        })
        )
    }

    renderRedirect = () => {
            return <Redirect to= {{pathname: '/explore', books: this.state.books, searchBook: this.searchBook }}/>
        
    };

    searchBook() {
        console.log("hey");
      }

    render(){
        const {explore} = this.state;

        return(
            <div>
                <button  onClick= {(event)=> this.handleClick(event) }>EXPLORE</button>
                <button >COLLECTIONS</button>
                <button >ARRIVALS</button>
                {explore && this.renderRedirect()}

            </div>
        )
    }
}

export default Dashboard;