import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import RelatedAd from './RelatedAd'

const images = [
    {
      original: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
      thumbnail: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
    },
    {
      original: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
      thumbnail: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
    },
    {
      original: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
      thumbnail: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
    },
  ];



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



class ViewAd extends React.Component{

    state = {
        isFavorite:false
    }

    render(){
        return(
            <div style={{padding:30}}>


                <div class=" float-left" style={{width:'50%'}}>
                    <div class="border" style={{padding:20}}>
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false}/>

                    </div>



               <div class="border mt-3" style={{padding:20}}>
                <h4>Details</h4>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <p style={{color:'gray'}}>Price</p>
                <p style={{color:'black'}}>800</p>

                <p style={{color:'gray'}}>Condition</p>
                <p style={{color:'black'}}>New</p>

                
                </div>

                <hr />

                <h4>Description</h4>

                <p>High quality&Low prices guarantee
                    Making Your Life Beautiful
                    Visit us Today
                    #HighlandFurniture  #furnituredesign #wood #interior #woodwork #architecture #design #woodfurniture #wooddesign #handmade #woodhouse #woodenhouse #wooden #chair #reclaimedwood #furnitureonline #livingroom #decor #shed #luxuryhomes #homedesign #loghome #outdoorfurniture
                    #Bed #sofa #diningtable #chairs #roomchairs #tables #tableset #sofacumbed #Interior #curtains #blinds #showcase #mirrorframe #clocks #frames
                    HIGHLAND FURNITURE&INTERIOR
                    Near car chowk ch bostan khan road chaklala scheme 3 Rawalpindi</p>
                </div>

            


                <div class=" float-left mt-4 border" style={{width:'100%',padding:10,marginBottom:30}}>
                <h4>Related Ads</h4>
                <br />
                    <Carousel
                     autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    ssr={true}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    
                    responsive={responsive}
                    
                    >

                        
                
                <RelatedAd />
                <RelatedAd />
                <RelatedAd />
                <RelatedAd />
                <RelatedAd />


                    </Carousel>
                    
                </div>
             

               </div>
            


              
               

                <div class="border float-right" style={{width:'48%',padding:10}}>
                    <div class="float-left">
                <h2>Rs 8000</h2>
                <p style={{color:'gray'}}>Sports Car</p>
                <p style={{color:'gray'}}>Karachi Road</p>

                </div>

                <div class="float-right">
                    <div>

                    {!this.state.isFavorite?<i class="fa fa-heart mt-3  " onClick={()=>{
                    if(this.state.isFavorite){
                        this.setState({isFavorite:false})
                    }else{
                        this.setState({isFavorite:true})

                    }
                }} style={{fontSize:25,color:'black',}}></i>:
                
                
                <i class="fa fa-heart mt-3 " onClick={()=>{
                    if(this.state.isFavorite){
                        this.setState({isFavorite:false})
                    }else{
                        this.setState({isFavorite:true})

                    }
                }} style={{fontSize:25,color:'red',}}></i>
                }

                <br />
                <br />
                <br />

                <p style={{color:'gray'}}>8/7/2021</p>
                    </div>

                </div>

                </div>

                


                <div class="border float-right mt-3 " style={{width:'48%',padding:10}}>
                    <h4>Seller Description</h4>
                    <br  />

                    <div style={{display:'flex',flexDirection:'row'}}>
                    <img src="http://localhost:3000/assets/img/avatar.png"  style={{borderRadius:100,width:70}}/>
                   
                    <div class="mt-2 ml-3">
                    <h5 >UserName</h5>
                    <p style={{color:'gray'}}>Member since 2021</p>

                    </div>

                    </div>
                    <br />
                    <a href="#" class="btn btn-primary" style={{width:'100%'}}>Chat with Seller</a>

                </div>
               
               

            </div>
        )
    }
}

export default ViewAd