import React, { Component } from 'react'
import './Mycss.css';

export default class Fetchme extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: null,
          statebus: [],
          busarea:''
        };
    }
    // componentDidMount() {
    //     fetch(`https://www.redbus.in/Home/SolarSearch?search=${this.state.busarea}`)
    //       .then(response => response.json())
    //       .then(parsedJSON => {
    //         let buses = parsedJSON.response.docs.map((redbus)=>{
    //           return(
    //           <div>{redbus.Name}</div>
    //           )
    //         })
    //           this.setState({statebus:[buses]})
    //       })

    //   }

    clickHandler = event => console.log(event.target.id)
      
      srconchange = (e) =>{
          this.setState({busarea:e.target.value})
          fetch(`https://www.redbus.in/Home/SolarSearch?search=${this.state.busarea}`)
          .then(response => response.json())
          .then(parsedJSON => {
            let buses = parsedJSON.response.docs.map((redbus,index)=>{
              return(
                  <div id={redbus.ID} key={redbus.ID} onClick={this.clickHandler}>{redbus.Name}</div>              )
            })
              this.setState({statebus:[buses]})
          })

      }

    render() {
       
        return (
            <div className = 'changer'>
              <input type="text" name ="busarea" onChange={this.srconchange.bind(this)}></input>
              {/* <input type="text" name ="busarea" onChange={this.srconchange.bind(this)}></input> */}
        {this.state.statebus}
        
          
        
      </div>
        );
    }
}

