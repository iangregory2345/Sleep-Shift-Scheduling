import React, { Component, useState } from "react";
import './Schedule.css';
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
import schedule from '../assets/schedule.png';
import ScheduleIcon from '@material-ui/icons/Schedule';


class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  handleClose = () => this.setState({ showModal: false })

  render() {
    return (
      <div>
        <Card className="bg-dark text-white">
          <Card.Img className={"cards"} src={schedule} alt="Card image" />
          <Card.ImgOverlay onClick={() => this.setState({ showModal: true })}>
            {/* <Card.Title>Card title</Card.Title> */}
            <div className={"flexContainer"}>
              <div className={"flex-child-1"}>
                <ScheduleIcon className={"MuiSvgIcon-root-schedule"} fontSize="large"></ScheduleIcon>
              </div>
              <div className={"exercise-flex-child-2"}>
                <h1 className={"h1-font"}>Schedule</h1>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
        <SleepModal open={this.state.showModal} handleClose={() => this.handleClose()}></SleepModal>
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
        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" value={typeof value === 'number' ? value : 0} onChange={(e, v) => handleSliderChange(e, v)} defaultValue={12} max={24} min={0} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={props.handleClose} color="primary">
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

export default Schedule;