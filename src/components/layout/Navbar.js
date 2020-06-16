import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import YoutubePageNav from './youtubePageNav'
import RecepieAppNav from './recepieAppNav';
import RecepieApp from '../dashboard/recepieApp';
import Quiz from '../Quiz';


const Navbar = (props) => {
    const { auth, profile } = props;
   //console.log(auth)
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo"> 
                <img src="../img/kitchen.png" className="logo-image"></img> 
                </Link>
                <Link to='/quiz' className="quiz-holder">QUIZ</Link>
               { links }
               <YoutubePageNav />
               <RecepieAppNav />
            </div>

        </nav>
    )
}

const mapStateToProps =(state) => {
    console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps) (Navbar);

//VIDEO LEKCIJA #25 - SAKRIVANJE NAVIGACIJE SIGNIN  SIGNUP I LOGIN
//IZBACUJE TYPEERROR ZA AUTH
//NEKAKO PRONACI RESENJE
//PRESKACEM ZA SADA

//TAKODJE OBUHVATA I VIDEO #26