import React from 'react'
import AdImg from './ad.jpg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Ad extends React.Component{
    state = {
        isFavorite:false
    }
    render(){
        return(
            
            
            <div  className="border text-secondary" style={{  borderWidth:1,borderRadius:2,width:290,marginTop:20,marginLeft:20 }}>
                {!this.state.isFavorite?<i class="fa fa-heart mt-3 ml-2" onClick={()=>{
                    if(this.state.isFavorite){
                        this.setState({isFavorite:false})
                    }else{
                        this.setState({isFavorite:true})

                    }
                }} style={{fontSize:25,position:'absolute',color:'black',}}></i>:
                
                
                <i class="fa fa-heart mt-3 ml-2" onClick={()=>{
                    if(this.state.isFavorite){
                        this.setState({isFavorite:false})
                    }else{
                        this.setState({isFavorite:true})

                    }
                }} style={{fontSize:25,position:'absolute',color:'red',}}></i>
                }
         

                <Link to="/ad/2" style={{textDecoration:'none',color:'black'}}>
                

                <img src={AdImg} style={{width:'100%',height:200}}/>
                

                <div class="mt-2 ml-3">
                <p style={{color:'black',fontSize:25,fontWeight:'bold'}}>Rs 500</p>
                <p style={{color:'gray'}}>This is the best car</p>
                <br />

                
                <p class="float-left" style={{color:'gray'}}>Karachi Road</p>

                <p class="float-right" style={{color:'gray'}}>8/7/2021</p>

                </div>
                </Link>
            </div>
           
        )
    }
}

export default Ad