import React from 'react'
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
class Loading extends React.Component{
    render(){
        return(

            <div className="loading-div" style={{backgroundColor:'#229dd0',justifyContent:'center'}}>
                <center>
                  <img src="http://localhost:3000/assets/img/NUX.png" style={{width:360,height:360,marginTop:50}}/>  
                  <Dots />

                  </center>
                 

            </div>
        )
    }
}

export default Loading