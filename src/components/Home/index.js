import React from 'react'
import Ad from '../Ad'
import Footer from '../Footer'

class Home extends React.Component{
    render(){
        return(
            <div>

                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
                <Ad />
                <Ad />
                <Ad />
                <Ad />
                <Ad />
                <Ad />
                <Ad />
                <Ad />

                </div>

                <br />
                <br />

            <Footer />
            </div>
        )
    }
} 

export default Home