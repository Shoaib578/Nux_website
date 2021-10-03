import React from 'react'

import AuthModal from './AuthModal'

class FixedNavbar extends React.Component{
  state = {
  
      locations:[
          "Badakhshan",
          "Badghis",
          "Baghlan",
          "Balkh",
          "Bamyan",
          "Daykundi",
          "Farah",
          "Faryab",
          "Ghazni",
          "Ghor",
          "Helmand",
          "Herat",
          "Jowzjan",
          "Kabul",
          "Kandahar",
          "Kapisa",
          "Khost",
          "Kunar",
          "Kunduz",
          "Laghman",
          "Logar",
          "Nangarhar",
          "Nimruz",
          "Nuristan",
          "Paktia",
          "Paktika",
          "Panjshir",
          "Parwan",
          "Samangan",
          "Sar-e Pol",

      ],
  }
    render(){
        return(
          <div>




<nav class="navbar navbar-light bg-light  flex-nowrap flex-row  fixed-top">
  <div class="container ml-5">
    <a href="/" class="navbar-brand " >
        <h3 style={{color:'#229dd0',fontWeight:'bold'}}>NUX</h3>
    </a>
    <select class="form-control" style={{width:'20%'}}>
      <option selected value="">Select location</option>
      {this.state.locations.map(data=>{
      return <option value={data} key={data}>{data}</option>
       
      })}
     
    </select>
        
        <div style={{display:'flex',flexDirection:'row',width:'50%'}}>
          
    <input class="form-control " type="search" placeholder="Find Cars,Mobile Phones and more..." aria-label="Search" />
    <button class="btn btn-outline-primary"  type="submit">Search</button>

    </div>

    
    <ul class="nav navbar-nav flex-row">
    
   

   
      <li class="nav-item"><a class="nav-link pr-3 "  style={{fontWeight:'bold',textDecoration:'underline',color:'black'}} data-toggle="modal" data-target="#exampleModal" href="">Login</a></li>

      <li class="nav-item border" style={{justifyContent:'center',alignItems:'center',padding:1,borderRadius:20,width:100,borderColor:'#229dd0',borderWidth:1}}>
          <center>
          <a class="nav-link pr-3 "  style={{fontWeight:'bold',color:'#229dd0',}} href="">Sell+</a>
          
          </center>
          </li>
    </ul>
  </div>
</nav>


<AuthModal />

          </div>
        )
    }
}

export default FixedNavbar