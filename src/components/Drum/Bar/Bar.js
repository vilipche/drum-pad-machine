import React from "react";
import classes from "./Bar.module.css";

const Bar = (props) => {
    return (
        <div className={classes.Slider}>
            <label for="volume">Volume</label>
            <input
                onInput={(e) => {
                    document.getElementById("slider-value").innerHTML =
                        e.target.valueAsNumber;
                    props.changeVolume(e.target.valueAsNumber * 0.01);
                    // console.log(e.target.valueAsNumber * 0.01);
                }}
                type="range"
                min="0"
                max="100"
                class="slider"
                id="myRange"
            />
            <div id="slider-value">50</div>
        </div>
    );
};

export default Bar;
