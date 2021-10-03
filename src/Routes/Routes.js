import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../components/Home'
import Header from '../components/Header'
import FixedNavbar from '../components/Header/Fixed_Nabar';
import Loading from '../components/Loading';
import ViewAd from '../components/Ad/View_ad'
import LoginWithFacebook from '../components/Auth/LoginWithFacebook';


class Routes extends React.Component{
  state = {
    isLoading:true,
  }


  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false})
    },1000)
  }
  
  render(){
    
    if(!this.state.isLoading){

    return(
      <Router>
  <FixedNavbar />
           <br />
           <br />
          
           <br />
          

            
        <Header />


        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/ad/:id' component={ViewAd}/>
          <Route exact path="/login_with_facebook/:code/:user_name" component={LoginWithFacebook}/>

        </Switch>
      </Router>
    )
  }else{
    return <Loading />
  }

  }
}

export default Routes