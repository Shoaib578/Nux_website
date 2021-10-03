import React from 'react'
import base_url from '../base_url'

class Footer extends React.Component{
    render(){
        return(
            <footer class="footer">

<ul class="r-footer">
<li>
  <h2>
Social</h2>
<ul class="box">
<li><a href="#">Facebook</a></li>
<li><a href="#">Twitter</a></li>
<li><a href="#">Pinterest</a></li>
<li><a href="#">Dribbble</a></li>
</ul>
</li>
<li class="features">
  <h2>
  POPULAR CATEGORIES
</h2>
<ul class="box h-box">
<li><a href="#">Cars</a></li>
<li><a href="#">Flats for rent</a></li>
<li><a href="#">Mobile Phones</a></li>
<li><a href="#">Jobs</a></li>

</ul>
</li>
<li>
  <h2>
  TRENDING SEARCHES
</h2>
<ul class="box">
<li><a href="#">Bikes</a></li>
<li><a href="#">Watches</a></li>
<li><a href="#">Books</a></li>
<li><a href="#">Dogs</a></li>

</ul>
</li>



<li>
  <h2>
  Get Your App Today
</h2>
<ul class="box">
<li><a href="#">
<img src={base_url+'assets/img/playstore.png'} style={{height:65,width:160}}/>    
    </a></li>
    <br/>
<li><a href="#" className="ml-2 ">
<img src={base_url+'assets/img/appstore.png'} style={{height:45,width:140}}/>    
</a></li>

</ul>
</li>


</ul>
<div class="b-footer">
<p>
All rights reserved by ©NUX 2021 </p>
</div>
</footer>
        )
    }
}

export default Footer