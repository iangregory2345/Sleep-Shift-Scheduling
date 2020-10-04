import React, { Component, useState } from "react";
import './SleepCard.css';
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
import bed from '../assets/bed.png'
import InfoIcon from '@material-ui/icons/Info';

class SleepCard extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      sleep: 0
    };
  }

  handleClose = () => this.setState({ showModal: false })

  updateSleep = (newSleep) => this.setState({ sleep: newSleep })

  getOptimalSleepForAge = (age) => {
    console.log("age", age)
    if (6 <= age && age <= 13)
      return [10, 13]

    else if (14 <= age && age <= 17)
      return [8, 10]

    else if (18 <= age && age <= 64)
      return [7, 9]

    else if (65 <= age)
      return [7, 8]

    else
      return [0,0]
  }

  render() {
    // console.log("Sleep", Number(this.props.age))
    const [low, high] = this.getOptimalSleepForAge(Number(this.props.age))
    console.log(low, high)
    return (
      <div>
        <Card className="bg-dark text-white">
          <Card.Img className={"cards"} src={bed} alt="Card image" />
          <Card.ImgOverlay onClick={() => this.setState({ showModal: true })}>
            {/* <Card.Title>Card title</Card.Title> */}
            <div className={"flexContainer"}>
              <div className={"flex-child-1"}>
                <CircularProgressbar
                  value={this.state.sleep}
                  maxValue={12}
                  text={this.state.sleep}
                  className={"progressBar"}
                  strokeWidth={20}
                  styles={buildStyles({
                    textSize: "15px",
                    textColor: "#312f2f",
                    pathColor: this.state.sleep > high ? "yellow" : this.state.sleep < low ? "red" : "green",
                    trailColor: "white"
                  })}
                >
                </CircularProgressbar>
              </div>
              <div className={"flex-child-2"}>
                <h1 className={"h1-font"}>Hours of Sleep</h1>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
        <SleepModal low={low} high={high} updateSleep={(s) => this.updateSleep(s)} open={this.state.showModal} handleClose={() => this.handleClose()}></SleepModal>
      </div>
    );
  }
}

const styles = (theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function SleepModal(props) {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event, newValue) => { setValue(newValue) };

  return (
    <Dialog onClose={props.handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Sleep Diary
        </DialogTitle>
      <DialogContent dividers>
        <p>How many hours have you slept today?</p>
        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" value={typeof value === 'number' ? value : 0} onChange={(e, v) => handleSliderChange(e, v)} defaultValue={12} max={12} min={0} />
        <small><InfoIcon fontSize="small" /> Optimal Sleep for you would be between {props.low}-{props.high} hours</small>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => { props.updateSleep(value); props.handleClose() }} color="primary">
          Save changes
          </Button>
      </DialogActions>
    </Dialog>
  );
}

const PrettoSlider = withStyles({
  root: {
    color: '#1d6ab9',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default SleepCard;