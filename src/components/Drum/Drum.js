import React from "react";
import Pad from "./Pad/Pad";

import classes from "./Drum.module.css";

class Drum extends React.Component {
    state = {
        pads: [
            {
                audio:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/22[kb]Sml-clap1.wav.mp3",
                keyStroke: "7",
            },

            {
                audio:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/57[kb]acoustic_snare.aif.mp3",
                keyStroke: "8",
            },
            {
                audio:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/22[kb]Sml-clap1.wav.mp3",
                keyStroke: "9",
            },
            {
                audio:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/22[kb]Sml-clap1.wav.mp3",
                keyStroke: "4",
            },
            {
                audio:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/57[kb]acoustic_snare.aif.mp3",
                keyStroke: "5",
            },
            {
                audio:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/22[kb]Sml-clap1.wav.mp3",
                keyStroke: "6",
            },
            {
                audio:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/57[kb]acoustic_snare.aif.mp3",
                keyStroke: "1",
            },
            {
                audio:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/22[kb]Sml-clap1.wav.mp3",
                keyStroke: "2",
            },
            {
                audio:
                    "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/57[kb]acoustic_snare.aif.mp3",
                keyStroke: "3",
            },
        ],
    };

    render() {
        return (
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
        );
    }
}

export default Drum;
