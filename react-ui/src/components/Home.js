
import React, { Component } from "react";
import './Home.css';
import Button from '@material-ui/core/Button';
import SleepCard from "./SleepCard";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "Base title"
    };
  }

  changeTitle = () => this.setState({title: "New Title"})

  render() {
    return (
      <div>
        <SleepCard></SleepCard>
        <p>

        </p>
        <SleepCard></SleepCard>
        <p>
          
        </p>
        <SleepCard></SleepCard>
      </div>
    );
  }
}

export default Home;