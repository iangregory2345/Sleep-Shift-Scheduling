
import React, { Component } from "react";
import './Home.css';
import Button from '@material-ui/core/Button';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "Base title"
    };
  }

  changeTitle = () => this.setState({title: "New Title"})

  render() {
    return (
      <div>
        <div>
            <h1>{this.state.title}</h1> 
            <h1>{this.props.message}</h1>
        </div>
        <div>
            <Button variant="contained" onClick={()=>this.changeTitle()}>Change Title</Button>
        </div>
      </div>
    );
  }
}

export default Home;