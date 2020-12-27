import React, { Component } from 'react';

class Hudini extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    render() {
        return (
            <div>
                {this.state.show ? "Now u see me" : "Now u dont"}
            </div>
        )

    }
}

export default Hudini