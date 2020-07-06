
import React, { Component } from 'react';

import Dashboard from './Dashboard';
import {Link, Redirect} from "react-router-dom";


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            login: false,
            redirect: false,
        }
    }

    handleClick(event){
        if(this.state.username =="DOLLY" && this.state.password =="DOLLY"){
            this.setState({
                login: true,
                redirect: true,
            })
        }
    }

    handleChangeUser = (event) =>{
      this.setState({
        username: event.target.value
      })
    }

    handleChangePassword= (event) => {
        this.setState({
          password: event.target.value
        })
      }



    render(){
        const {login} = this.state;
        if (this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div className="container">
            <input placeholder="USER NAME" onChange= {this.handleChangeUser} type="text"/>
           <br />
            <input placeholder="PASSWORD" type="password" onChange= {this.handleChangePassword} />
           <br />
           <button label = "Submit" onClick= {(event)=> this.handleClick(event)}>SUBMIT</button>
            {login && <Dashboard login = {login}/>}
            </div>
        )
    }
}

export default Login;