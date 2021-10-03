import React from 'react'

 class AllCategories extends React.Component{
     render(){
         return(
            <footer class="footer" style={{width:800}}>

            <ul class="r-footer">
            <li>
            <p style={{color:'black'}}>
            Mobiles</p>
            <ul class="box">
            <li><a href="/blogs">Tablets</a></li>
            <li><a href="/blogs">Accessories</a></li>
            <li><a href="/blogs">Mobile Phones</a></li>
            
            
            </ul>
            </li>


            <li class="features">
            <p style={{color:'black'}}>
            Bikes</p>
            <ul class="box h-box">
            <li><a href="#">Motorcycles</a></li>
            <li><a href="#">Spare Parts</a></li>
            <li><a href="#">Bicycles</a></li>
            <li><a href="#">ATV & QUADS</a></li>
            <li><a href="#">Scooters</a></li>
            </ul>
            </li>

            <li class="features">
            <p style={{color:'black'}}>
            Vehicles</p>
            <ul class="box h-box">
            <li><a href="#">Cars</a></li>
            <li><a href="#">Cars on Installements</a></li>
            <li><a href="#">Cars Accessories</a></li>
            <li><a href="#">Spare Parts</a></li>
            <li><a href="#">Buses,Vans & Trucks</a></li>
            <li><a href="#">Rickshaw & Chingchi</a></li>
            <li><a href="#">Other Vehicles</a></li>
            <li><a href="#">Boats</a></li>
            <li><a href="#">Tractors & Trailers</a></li>

            </ul>
            </li>


            <li class="features">
            <p style={{color:'black'}}>
            Kids</p>
            <ul class="box h-box">
            <li><a href="#">Kids Furniture</a></li>
            <li><a href="#">Toys</a></li>
            <li><a href="#">Prams & Walkers</a></li>
            <li><a href="#">Swings & Slides</a></li>
            <li><a href="#">Kids Bikes</a></li>
            <li><a href="#">Kids Accessories</a></li>
            </ul>
            </li>



            <li class="features">
            <p style={{color:'black'}}>
            Property For Rent</p>
            <ul class="box h-box">
            <li><a href="#">Houses</a></li>
            <li><a href="#">Apartments & Flats</a></li>
            <li><a href="#">Portion & Floors</a></li>
            <li><a href="#">Shop-Offices-Commertial Space</a></li>
            <li><a href="#">Roomate & Paying Guests</a></li>
            <li><a href="#">Rooms</a></li>

            <li><a href="#">Vocation Rentals-Guest Houses</a></li>
            <li><a href="#">Land & Plots</a></li>

            </ul>
            </li>

           
            </ul>
           
            </footer>
         )
     }
 }

 export default AllCategories