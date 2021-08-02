import React from "react";
import './Splash.css'
import qosgif from '../../media/images/qosgif.gif'
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

function Splash() {

    const sessionUser = useSelector((state) => state.session.user);
    if (sessionUser) return <Redirect to="/kitchen" />;

    return (
        <div id='splashDiv'>
            <h2 className='splashTitle'>Welcome to the</h2>
            <h1 className='splashTitle'>Queen of Sauce!</h1>
            <img src={qosgif} alt='A gif of the queen of sauce during her cooking show.' />
            <p>Keep track of all your Stardew Valley ingredients and recipes, and even make your own!</p>
        </div>
    );
}

export default Splash;
