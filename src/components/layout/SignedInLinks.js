import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction';

const SignedInLinks = (props) => {
    
    return (
       <ul className="right">
            <li><NavLink to='/create'>CREATE NEW CONTENT</NavLink></li>
            <li><a href="javascript:void(0)" onClick={ props.signOut }>LOGOUT</a></li>
            <li><NavLink to='/'>
            <img className="carrot" src="./img/carrot.png" />
            </NavLink></li>
       </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);


//POGLEATI PONOVO LEKCIJU #29 - USER PROFILE DATA 
//Ne pronalazi mi inicijale u firebase->profile u inspektu