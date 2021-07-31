import React from "react";
import './Splash.css'
import qosgif from '../../media/qosgif.gif'

function Splash() {

    return (
        <div id='splashDiv'>
            <h2 className='splashTitle'>Welcome to the</h2>
            <h1 className='splashTitle'>Queen of Sauce!</h1>
            <img src={qosgif} />
            <p>Keep track of all your Stardew Valley ingredients and recipes, and even make your own!</p>
        </div>
    );
}

export default Splash;
