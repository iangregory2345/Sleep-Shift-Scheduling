
import React, { Component } from "react";
import './Exercise.css';


class Exercise extends Component {
  constructor() {
    super();
  }


  render() {
    console.log(this.props)
    return (
      <div>
          Exercise
      </div>
    );
  }
}

export default Exercise;