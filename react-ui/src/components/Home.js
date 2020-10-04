
import React, { Component } from "react";
import Bar from "./Bar";
import ExerciseCard from "./ExerciseCard";
import './Home.css';
import Schedule from "./Schedule";
import SleepCard from "./SleepCard";

class Home extends Component {
  constructor() {
    super();
  }


  onClick = () => {
    this.props.history.push({
      pathname: "/userinfo",
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Bar {...this.props}></Bar>
        <div style={{ position: "relative", top: "50px" }}>
          <SleepCard></SleepCard>
          <p> </p>
          <ExerciseCard></ExerciseCard>
          <p> </p>
          <Schedule></Schedule>
        </div>
      </div>
    );
  }
}

export default Home;