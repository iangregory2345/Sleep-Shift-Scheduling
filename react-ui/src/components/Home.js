
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
    try {
      var { usualSleepStart, usualSleepEnd, age, workStart, workEnd } = this.props.location.props
    } catch (error) {
      var usualSleepStart = "";
      var usualSleepEnd = "";
      var age = 0;
      var workStart = "";
      var workEnd = "";
    }

    console.log(usualSleepStart, usualSleepEnd, age, workStart, workEnd)
    return (
      <div>
        <Bar {...this.props} usualSleepStart usualSleepEnd></Bar>
        <div style={{ position: "relative", top: "50px" }}>
          <SleepCard age={age}></SleepCard>
          <p> </p>
          <ExerciseCard onClick={() => this.exerciseClick()}></ExerciseCard>
          <p> </p>
          {/* <Schedule></Schedule> */}
        </div>
      </div>
    );
  }
}

export default Home;