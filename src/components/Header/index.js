import React from 'react'
import FixedNavbar from './Fixed_Nabar'
import AllCategories from './All_Categories'

class Header extends React.Component{
    render(){
        return(
            <div>
            
          

          
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <button class="navbar-toggler ml-5 mt-5" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse ml-6 " id="navbarNav">
    <ul class="navbar-nav ml-5">

    <li class="nav-item dropdown" >
        <a class="nav-link dropdown-toggle " style={{fontWeight:'bold',color:'black'}} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ALL CATEGORIES
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <AllCategories />
        </div>
      </li>


      <li class="nav-item ">
        <a class="nav-link" href="#">Mobile Phones</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cars</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Motorcycles</a>
      </li>


      <li class="nav-item">
        <a class="nav-link" href="#">Houses</a>
      </li>



      <li class="nav-item">
        <a class="nav-link" href="#">TV-Video-Audio</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Tablets</a>
      </li>


      <li class="nav-item">
        <a class="nav-link" href="#">Lands & Plots</a>
      </li>

    </ul>

  </div>

</nav>
<hr />
</div>
        )
    }
}

export default Header