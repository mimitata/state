import React, { Component } from 'react'

export default class App extends Component {
  state={
    person:{
      fullName: "Selena Gomez",
      bio: "An accomplished actress, singer, and philanthropist.",
      imgSrc: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2021/05/selena-gomez-sa-marque-cosmetique-rare-beauty-debarque-en-france_1200.jpg",
      profession: "Entertainer"
    },
    shows:true
  }
  render() {
    return (
      <div>
       
        <button onClick={()=>{this.setState({shows:!this.state.shows});console.log(this.state.shows)}}>Show</button>
        {(this.state.shows)? 
        <div>
        <h1> {this.state.person.fullName}</h1>
        <h1>{this.state.person.bio}</h1>
      <h1><img style={{width:400}} src={this.state.person.imgSrc }/></h1> 
        <h1>{this.state.person.profession}</h1>
        </div>:<></> }

      
      
      
      
      </div>
    )
  }
}
