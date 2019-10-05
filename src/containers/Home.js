import React, { Component } from "react";
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Feel free to use these tricks :)</h1>
                <Link to="/sticky-sidebar">Sticky Sidebar (airbnb-like sticky box)</Link>
                <br />
                <Link to="/blinking-text">Blinking text</Link>
            </div>
        )
    }
}