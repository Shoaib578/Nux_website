import React from 'react'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import LoginWithFacebook from '../Auth/LoginWithFacebook'



class AuthModal extends React.Component{


  


  state = {
    login_with_facebook:false,
    login_with_google:false,
    username:'',
    facebook_info : {
      'username':'',
      'profile_pic':''

    },
    login:false
  }


  responseGoogle = (response) => {
    this.setState({login_with_google:true,login:true})

    console.log(response);
  }
  
  
  
   responseFacebook = (response) => {
    this.setState({login_with_facebook:true,login:true,facebook_info:{
      "profile_pic":response.picture.data.url,
      'username':response.name
    }})
  
  }


    render(){
        return(
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog " role="document">
    <div class="modal-content" style={{backgroundColor:'#229dd0',opacity:.8}}>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

          {!this.state.login?<center>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={this.responseGoogle}
      
        cookiePolicy={'single_host_origin'}
        />



<br />
   
        
      </center>:null}
          
         {this.state.login_with_facebook?<center>
          <LoginWithFacebook info={this.state.facebook_info} />
        </center>:null}

          {!this.state.login?<center>
          <div >

    <FacebookLogin
    appId="377166070584268"
    
    fields="name,email,picture"
    buttonStyle={{fontSize:10,height:50,justifyContent:'center',alignItems:'center',alignSelf:'center',}}
    textButton={'Login With Facebook'}
    icon="fa-facebook"
    
    callback={this.responseFacebook} />
          </div>
          </center>:null}

    


    



      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    
      </div>
    </div>
  </div>
</div>
        )
    }
}

export default AuthModal