import profilePic from './assets/pictureCard2.png'

function Card(){

    return(
        <div claseName="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2>Maneerat</h2>
            <p>I am student</p>
            <hr/>

        </div>
    );

}
export default Card