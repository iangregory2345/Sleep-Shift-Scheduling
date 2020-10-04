import React, { Component, useState } from "react";
import './ExerciseCard.css';
import Card from 'react-bootstrap/Card'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import exercise from '../assets/exercise.png';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


class ExerciseCard extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  render() {
    console.log("exe", this.props)
    return (
      <div>
        <Card className="bg-dark text-white">
          <Card.Img className={"cards"} src={exercise} alt="Card image" />
          <Card.ImgOverlay onClick={() => this.props.onClick()}>
            {/* <Card.Title>Card title</Card.Title> */}
            <div className={"flexContainer"}>
              <div className={"flex-child-1"}>
                <FitnessCenterIcon className={"MuiSvgIcon-root-exercise"}  fontSize="large"></FitnessCenterIcon>
              </div>
              <div className={"exercise-flex-child-2"}>
                <h1 className={"h1-font"}>Exercise</h1>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>

      </div>
    );
  }
}

export default ExerciseCard;