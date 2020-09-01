import React, { Component } from 'react'

const allButtons = [
    { name: "C", displayName: "C", id: "clear" },
    { name: "/", displayName: "/", id: "divide" },
    { name: "*", displayName: "x", id: "multiply" },
    { name: "7", displayName: "7", id: "seven" },
    { name: "8", displayName: "8", id: "eight" },
    { name: "9", displayName: "9", id: "nine" },
    { name: "-", displayName: "-", id: "subtract" },
    { name: "4", displayName: "4", id: "four" },
    { name: "5", displayName: "5", id: "five" },
    { name: "6", displayName: "6", id: "six" },
    { name: "+", displayName: "+", id: "add" },
    { name: "1", displayName: "1", id: "one" },
    { name: "2", displayName: "2", id: "two" },
    { name: "3", displayName: "3", id: "three" },
    { name: "=", displayName: "=", id: "equals" },
    { name: "0", displayName: "0", id: "zero" },
    { name: ".", displayName: ".", id: "decimal" },
]

class KeysPad extends Component {

    render() {

        return (
            <div className="button">

                {allButtons.map((item, index) => {

                    return (
                        <button className="buttons"
                            id={item.id}
                            key={index}
                            name={item.name}
                            onClick={e => this.props.onClick(e.target.name)} >
                            {item.displayName}
                        </button>
                    );
                })}

            </div>
        )
    
    }

}

export default KeysPad
