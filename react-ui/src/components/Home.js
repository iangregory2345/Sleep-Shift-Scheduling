
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

  exerciseClick = () => {
    this.props.history.push({
      pathname: "/exercise",
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
          <ExerciseCard onClick={()=> this.exerciseClick()}></ExerciseCard>
          <p> </p>
          <Schedule></Schedule>
        </div>
      </div>
    );
  }
}

export default Home;