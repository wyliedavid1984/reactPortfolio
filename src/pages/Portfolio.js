import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import CardBtn from "../components/CardBtn";
import "./style.css";

import projects from "../projects.json"

class Portfolio extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0,
    projects
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
    console.log(this.state.projects, "componentDidmount")
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };

  loadNextDog = () => {
    API.getRandomDog()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
          {/* <h2>Hello</h2>
        <h1 className="text-center">Make New Friends</h1>
        <h3 className="text-center">
          Thumbs up on any pups you'd like to meet!
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center">
          Made friends with {this.state.matchCount} pups so far!
        </h1> */}
        <img href={this.state.projects[0].image} />
        <img href="https://www.google.com/search?q=images&safe=off&rlz=1C1CHBF_enUS858US858&sxsrf=ALeKk02GN4T4wQl8X8YQS4dHP-vkfkpg6w:1612625039167&tbm=isch&source=iu&ictx=1&fir=nqk2hAE034Z3nM%252Czz9fuPcvMCFWiM%252C_&vet=1&usg=AI4_-kQBN2uJGZi48NAC006eTR0dSau1Nw&sa=X&ved=2ahUKEwiLzPW0yNXuAhUPd98KHUGlC08Q9QF6BAgPEAE#imgrc=nqk2hAE034Z3nM" alt="SunCloud"  />
        {this.state.projects.map((project, index) => (
            <div className="card" style={{ backgroundImage: project.image ? `url(${project.image})` : "none"}}>
                {!project.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" value={project.id}/>}
                <h3 value={index}>{project.id}</h3>
                <h3 value={index}>{project.title}</h3>
                <CardBtn className="left card-btn" onClick={this.handleBtnClick} data-value="left" />
                <CardBtn className="right card-btn"onClick={this.handleBtnClick} data-value="right" />
            </div>
        ))
        }

      </div>
    );
  }
}

export default Portfolio;