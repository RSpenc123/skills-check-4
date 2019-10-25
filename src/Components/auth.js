import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../dux/reducer'

class auth extends Component{
    constructor(){
        super ()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    handleRegister = () => {
        axios.post('/auth/register', {username: this.state.username,
        password: this.state.username}).then(res => {
            this.setState({
                username: '',
                password: ''
            })
            this.props.updateUser(res.data)
            this.props.history.push('/account')
        })
        .catch(err => console.log(err))
    }
    handleLogin = () => {
        axios.post('auth/login', {username: this.state.email, password: this.state.password}).then(res=>{
            this.setState({
                username: '',
                password: ''
            })
            this.props.updateUser(res.data)
            this.props.history.push('/account')
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div> 
                <div> image here</div>
                <div> HELO</div>
                <input
                value = {this.state.username}
                name = "username"
                onChange = {(e) => this.handleInput(e)}/>
                <input
                value = {this.state.password}
                name = "password"
                onChange = {(e) => this.handleInput(e)}/> 
             
                <Link to='/Dashboard'><button onClick={this.handleRegister}>Register</button>  </Link>
                <Link to='/Dashboard'><button onClick={this.handleLogin}>login</button>  </Link>


            </div>
        )
    }
}

const mapDispatchToProps = {
    updateUser
}
export default connect(null, updateUser)(auth)