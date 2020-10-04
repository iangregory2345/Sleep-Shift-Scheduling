
import React, { Component } from "react";
import './StartPage.css';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { Button } from "@material-ui/core";
import background from '../assets/background.png'

class StartPage extends Component {
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
        <h1 className={"title"}>Nap Time <NightsStayIcon fontSize="large"></NightsStayIcon></h1>
        <img className={"background"} src={background}></img>
        <Button variant="contained" className={"button-icon-main"} onClick={() => this.onClick()}>Begin</Button>

      </div>
    );
  }
}

export default StartPage;