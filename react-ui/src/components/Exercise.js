
import React, { Component } from "react";
import './Exercise.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Fade } from 'react-slideshow-image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import aerobicPic from '../assets/Aerobic.png';

class Exercise extends Component {
  constructor() {
    super();
  }

  fade_properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    indicators:true
  };

  slideImages = [
    '../assets/Aerobic.png',
    '../assets/slide_2.jpg',
    '../assets/slide_3.jpg',
    '../assets/slide_4.jpg'
  ];

  render() {
    console.log(this.props)
    return (
      <div>
        <h1 style={{marginBottom: "40px"}}>Exercise</h1>
        <h4>Optimal Exercise Time</h4>
        <div className={"grid_exercise_time"}>
          <Grid container spacing={3}   
          direction="row" 
          justify="center"
          alignItems="center"
          >
            <Grid item xs={4}>
              <Paper className="paper_exercise_time">Input1</Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper style={{ background:"transparent", "font-size": "xx-large" }}>-</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className="paper_exercise_time">Input2</Paper>
            </Grid>
          </Grid>

        </div>

        <h4 style={{marginTop: "35px", marginBottom:"-70px"}}>Eating Tips</h4>
        <div className="slide-container">
          <Fade {...this.fade_properties}>
              <Paper className="paper_exercise_tips">Snack 2 hours before exercise (Cereal, Toast, Yoghurt, Fruit + Vege)</Paper>
              <Paper className="paper_exercise_tips">Eat Carbs and Protein after exercise!</Paper>
              <Paper className="paper_exercise_tips">Avoid taking protein before exercise.</Paper>
          </Fade>
        </div>

        <h4 style={{marginTop: "35px"}}>Workout Recommendations</h4>
        <Slide {...this.fade_properties}>
          <Card className="workout_card">
            <CardContent>        
              <Typography variant="h5" component="h3">
                Aerobic Exercises
              </Typography>
              <Typography variant="body2" component="p">
                Exercises which speeds up heart rate and breathing. 
                Relaxes our blodd vessel walls, lower BP, burn body fat and more.
                <br />
                Give your heart and lungs a workout!
              </Typography>
            </CardContent>
          </Card>

          <Card className="workout_card">
            <CardContent>        
              <Typography variant="h5" component="h3">
                Strength Training
              </Typography>
              <Typography variant="body2" component="p">
                Strength training is important for building muscle mass. 
                <br/>
                Strengthen your muscles, stimulate bone growth, reduce stress, etc.
                <br/>
                Especially important for astronauts in space.
              </Typography>
            </CardContent>
          </Card>

          <Card className="workout_card">
            <CardContent>        
              <Typography variant="h5" component="h3">
                Stretching 
              </Typography>
              <Typography variant="body2" component="p">
                Stretching helps maintain flexibility. 
                <br />
                Stretching regularly makes muscles longer and more flexible which increasing our range of motion and reduces risk of injury
              </Typography>
            </CardContent>
          </Card>
        </Slide>

      </div>
    );
  }
}

export default Exercise;