import React, { Component } from "react";
import { Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <Link to="/sticky-sidebar">Sticky Sidebar (airbnb-like sticky box)</Link>
            </div>
        )
    }
}