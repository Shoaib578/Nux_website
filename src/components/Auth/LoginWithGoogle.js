import React from 'react'

class LoginWithGoogle extends React.Component{
    state = {
        locations_list:[
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
              
  <div class="form-group" style={{width:'60%'}}>
    <label for="exampleInputEmail1">Location</label>
    <select class="form-control" id="exampleFormControlSelect1">
        {this.state.locations_list.map(data=>(
            <option>{data}</option>

        ))}
     
    </select>
    
  </div>


  <div class="form-group" style={{width:'60%'}}>
    <label for="exampleInputPassword1">Phone Number</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone Number"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>

            </div>
        )
    }
}

export default LoginWithGoogle