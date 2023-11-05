import React from 'react'
import "./Signin.css";

function Signin(props) {
    return (
        <div className='signin p-3'>
            <div className='row  div-container-row justify-content-center'>
                <div className='col-8 col-sm-6 col-lg-4 p-3 div-container d-flex flex-column justify-content-center align-items-center'>
                    {props.page==='therepist'?<h4>Signin as Therepist</h4>:<h4>Signin as Patient</h4>}
                    <div class="google-btn">
  <div class="google-icon-wrapper">
    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="btn-text"><b>Sign in with google</b></p>
</div>


                </div>
            </div>
        </div>
    )
}

export default Signin
