import React from "react";
import Pad from "./Pad/Pad";

import classes from "./Drum.module.css";
import Bar from "./Bar/Bar";

class Drum extends React.Component {
    state = {
        pads: [
            {
                audio: new Audio(
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20R-8/26[kb]R8-Cl-Hi-Hat.aif.mp3"
                ),
                keyStroke: "7",
            },

            {
                audio: new Audio(
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20R-8/80[kb]R8-Crash.aif.mp3"
                ),
                keyStroke: "8",
            },
            {
                audio: new Audio(
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20R-8/117[kb]R8-Ride.aif.mp3"
                ),
                keyStroke: "9",
            },
            {
                audio: new Audio(
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20R-8/24[kb]R8-Snare-5.aif.mp3"
                ),
                keyStroke: "4",
            },
            {
                audio: new Audio(
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-8000/39[kb]8000clap16.wav.mp3"
                ),
                keyStroke: "5",
            },
            {
                audio: new Audio(
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-8000/23[kb]CR8KBASS.wav.mp3"
                ),
                keyStroke: "6",
            },
            {
                audio: new Audio(
                    "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Roland%20CR-8000/22[kb]CR8KMCNG.wav.mp3"
                ),
                keyStroke: "1",
            },
            {
                audio: new Audio(
                    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/22[kb]Sml-clap1.wav.mp3"
                ),
                keyStroke: "2",
            },
            {
                audio: new Audio(
                    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/57[kb]acoustic_snare.aif.mp3"
                ),
                keyStroke: "3",
            },
        ],
    };

    render() {
        return (
            <div className={classes.Wrapper}>
                <div className={classes.GridContainer}>
                    {this.state.pads.map((obj) => {
                        return (
                            <Pad
                                key={obj.keyStroke}
                                audio={obj.audio}
                                keyStroke={obj.keyStroke}
                            />
                        );
                    })}
                </div>
                <Bar changeVolume={this.changeVolume} />
            </div>
        );
    }

    changeVolume = (volumeValue) => {
        this.state.pads.forEach((element) => {
            element.audio.volume = volumeValue;
        });
    };
}

export default Drum;
