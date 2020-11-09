import React from "react";
import Pad from "./Pad/Pad";

class Drum extends React.Component {
    state = {
        pads: [
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
        ],
    };

    render() {
        return (
            <div>
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
