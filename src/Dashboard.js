import React, { Component } from 'react';
import Explore from './Explore';
import {Link, Redirect} from "react-router-dom";



class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            explore: false,
            redirect: false,
        }
    }

    handleClick(event){
        this.setState(prevState => ({
            explore: !prevState.explore
        })
        )
    }

    renderRedirect = () => {
            return <Redirect to='/explore' />
        
    };

    render(){
        const {explore} = this.state;

        return(
            <div>
                <button  onClick= {(event)=> this.handleClick(event)}>EXPLORE</button>
                <button >COLLECTIONS</button>
                <button >ARRIVALS</button>

                {explore && this.renderRedirect()}

            </div>
        )
    }
}

export default Dashboard;