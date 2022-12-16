import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';


import 'reactjs-popup/dist/index.css';
export default function Form (){


const [ profile, setProfile ] = useState([]);
const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
useEffect(() => {
    const initClient = () => {
        gapi.client.init({
            clientId: clientId,
            scope: ''
        });
    };
    gapi.load('client:auth2', initClient);
  });
  

const onSuccess = (res) => {
    setProfile(res.profileObj);

};

const onFailure = (err) => {
    console.log('failed', err);
};

const logOut = () => {
    setProfile(null);
};

    return (
    <div id='form'>


      <div class="main">
      <div class="container">
        <section class="wrapper">
          <div class="heading">
            <h1 class="text text-large">S'inscrire à la newsletter </h1>
            <p class="text text-normal">Pas encore inscrit ?  <span><a href="#" class="text text-links">Créer un compte</a></span>
            </p>
          </div>
          <form name="signin" class="form">
            <div class="input-control">
              <label for="email" class="input-label" hidden>Adresse E-mail</label>
              <input type="email" name="email" id="email" class="input-field" placeholder="Adresse E-mail"></input>
            </div>
            <div class="input-control">
              <label for="password" class="input-label" hidden>Mot de passe</label>
              <input type="password" name="password" id="password" class="input-field" placeholder="Mot de passe"></input>
            </div>
            <div className='newsletter' class="input-control">
              <input type="checkbox" id="scales" name="scales" ></input>
              <label for="scales">S'abonner à notre Newsletter</label>
            </div>
            <div class="input-control">
              <a href="#" class="text text-links">Mot de passe oublié</a>
              <input type="submit" name="submit" class="input-submit" value="Sign In" disabled></input>
            </div>
          </form>
          <div class="striped">
            <span class="striped-line"></span>
            <span class="striped-text">Ou</span>
            <span class="striped-line"></span>
          </div>
          <div class="method">
            <div class="method-control">
            <div className='succesfull-loggin'>
            {profile ? (
                <div>

                  <div class="success-checkmark">
                  <div class="check-icon">
                    <span class="icon-line line-tip"></span>
                    <span class="icon-line line-long"></span>
                    <div class="icon-circle"></div>
                    <div class="icon-fix"></div>
                  </div>
                </div>
                
                    <h3>Inscription réussie, <p>{profile.name}</p> </h3>
                    <button >Voir le site </button> <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
              <GoogleLogin
                  class="method-action"
                  clientId={clientId}
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
              )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
    )
}