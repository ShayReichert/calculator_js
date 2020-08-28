import React, { Component } from 'react'

class Display extends Component {

    render() {
        let { result } = this.props;
        return (
            <div>
                <div id="display-shadow">
                    <div id="display">
                        {result}
                    </div>
                </div>

            </div>
        )
    }
}

export default Display
