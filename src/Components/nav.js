import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class nav extends Component{
    render(){ console.log(this.props)
        return(
            <div> 
                
                <Link to='/Dashboard'><button>Home</button></Link>
                <Link to='/Post:postid'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
                
                </div>
        )
    }
}


const mapStateToProps = reduxState => {
    const {username, profilePicture} = reduxState;
    return{
        username, profilePicture
    }
}



export default connect(mapStateToProps) (nav)