import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import CardBtn from "../components/CardBtn";
import "./style.css";
import PageHeader from '../components/PageHeader/PageHeader'
import projects from "../projects.json"

class Portfolio extends Component {
  state = {
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

    if (btnType === "right") {
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
          <PageHeader />
        <h1 className="text-center">{this.state.projects[0].title}</h1>
       
        <Card image={this.state.projects[0].image} handleBtnClick={this.handleBtnClick} />
        <h3 className="text-center" style={{maxWidth: "70%", marginLeft:"auto", marginRight:"auto"}}>
           {this.state.projects[0].about} 
        </h3>
        <section className="cardContainer">
        {this.state.projects.map(project => (
            <section style={{pt:"10px",  marginRight:"10px", marginLeft:"10px"}}>
                <h3 className="cardTitle"><a href={project.deployedUrl} target="_blank" style={{color:"black"}}>{project.title}</a></h3>
                <section className="card" style={{ backgroundImage: project.image ? `url(${project.image})` : "none"}} value={project.id}>
                {!project.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
                </section>
            </section>
        ))
        }
        </section>
      </div>
    );
  }
}

export default Portfolio;