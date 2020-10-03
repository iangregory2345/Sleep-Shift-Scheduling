import React, { Component } from "react";
import './SleepCard.css';
import Card from 'react-bootstrap/Card'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class SleepCard extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  changeTitle = () => this.setState({ title: "New Title" })

  render() {
    return (
      <div>
        <Card className="bg-dark text-white">
          <Card.Img style={{ "height": "150px" }} src="https://i.insider.com/56325f06dd0895390b8b4675?width=1100&format=jpeg&auto=webp" alt="Card image" />
          <Card.ImgOverlay>
            {/* <Card.Title>Card title</Card.Title> */}
            <div className={"flexContainer"}>
              <CircularProgressbar
                value={5}
                maxValue={8}
                text={`Hours`}
                className={"progressBar"}
                strokeWidth={10}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textColor: "black",
                  pathColor: "black",
                  trailColor: "white"
                })}
              >
              </CircularProgressbar>
              <h1 style={{ 'color': "black", "marginTop": "9px" }}>Hours of Sleep</h1>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default SleepCard;