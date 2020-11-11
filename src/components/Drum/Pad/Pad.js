import React from "react";

import classes from "./Pad.module.css";

class Pad extends React.Component {
    state = { active: false, audio: this.props.audio };

    // Once the component is mounted, add the listeners
    componentDidMount() {
        this.keyPlayAudio();
        this.clickPlayAudio();
    }

    playAudio = () => {
        this.state.audio.play();
    };

    keyPlayAudio = () => {
        document.addEventListener("keyup", (event) => {
            if (event.key === this.props.keyStroke) {
                this.switchCSS();
                this.playAudio();
            }
        });
    };

    clickPlayAudio = () => {
        document.addEventListener("click", (event) => {
            if (event.target.id === this.props.keyStroke) {
                this.switchCSS();
                this.playAudio();
            }
        });
    };

    //Change css of the pad (when active) and use the duration of the audio
    switchCSS = () => {
        this.setState((prevState, props) => {
            return { active: !prevState.active };
        });
        setTimeout(() => {
            this.setState((prevState, props) => {
                return { active: !prevState.active };
            });
        }, this.state.audio.duration * 1000);
    };

    render() {
        return (
            <div
                id={this.props.keyStroke}
                className={`${classes.Pad} 
                ${this.state.active ? classes.ActivePad : classes.InactivePad}`}
            >
                {this.props.keyStroke}
            </div>
        );
    }
}

export default Pad;
