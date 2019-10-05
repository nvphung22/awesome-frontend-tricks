import React, { Component } from "react";

export default class BlinkingText extends Component {
    render() {
        return (
            <div class="blinking-text">
                <div className='container'>
                    <div class="neon">Neon </div>
                    <div class="flux">Flux </div>
                </div>
            </div>
        )
    }
}