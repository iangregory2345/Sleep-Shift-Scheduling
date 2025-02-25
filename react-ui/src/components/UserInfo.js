import React, { Component } from "react";
import './UserInfo.css';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Button } from "@material-ui/core";

class UserInfo extends Component {
    constructor() {
        super();
        this.state = {
            usualSleepStart: "",
            usualSleepEnd: "",
        };
    }

    onClick = () => {
        const props = {usualSleepStart: document.getElementById('sleepStart').value, usualSleepEnd:  document.getElementById('sleepEnd').value, 
        age: document.getElementById('age').value, workStart: document.getElementById('workStart').value, workEnd: document.getElementById('workEnd').value}
        console.log(props)
        this.props.history.push({
            pathname: "/home",
            props,
        })
    }

    render() {
        return (
            <div>
                <h1 className={"title"}>Nap Time <NightsStayIcon fontSize="large"></NightsStayIcon></h1>
                <TextField className={"name-field"} id="age" label="Age" variant="outlined" type="number" />
                <h4 className="work-title">Work Time</h4>
                <div className={"flex-container"}>
                    <TextField
                        style={{ left: "50px" }}
                        id="workStart"
                        label="Start"
                        type="time"
                        defaultValue="09:00"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                    <h4 style={{ position: "relative", left: "70px", color: "#38383a", top: "10px" }}>-</h4>
                    <TextField
                        style={{ left: "96px" }}
                        id="workEnd"
                        label="End"
                        type="time"
                        defaultValue="17:00"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                </div>

                <div style={{ position: "relative", top: "170px" }}>
                    <FormControl variant="outlined" style={{ width: "222.4px" }}>
                        <InputLabel id="demo-simple-select-outlined-label">Usual Travel Time</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <h4 style={{ position: "relative", fontSize: "1.4rem", color: "#38383a", top: "200px" }}>Usual Sleeping Hours</h4>

                <div className={"sleep-flex-container"}>
                    <TextField
                        style={{ left: "50px" }}
                        id="sleepStart"
                        label="Start"
                        type="time"
                        defaultValue="22:00"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                    <h4 style={{ position: "relative", left: "70px", color: "#38383a", top: "10px" }}>-</h4>
                    <TextField
                        style={{ left: "96px" }}
                        id="sleepEnd"
                        label="Wake"
                        type="time"
                        defaultValue="07:00"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                    />
                </div>

                <Button startIcon={<ScheduleIcon></ScheduleIcon>} variant="contained" className={"button-icon"} onClick={() => this.onClick()}>Get Schedule</Button>

            </div>
        );
    }
}

export default UserInfo;