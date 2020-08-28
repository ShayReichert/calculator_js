import React, { Component } from 'react'
import Display from './Display'
import KeysPad from './KeysPad'

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stockNumber: "0",
            result: ""

        }
    }

    onClick = button => {
        const operators = ("-" || "+" || "/" || "*")

        if (button === "=") {
            this.calculate()

        } else if (button === "C") {
            this.reset()

            // check if number contain already a "."
        } else if (button === ".") {
            if (this.state.result !== "") {
                if(this.state.result.includes(operators) === false) {
                    if (this.state.result.includes(".")) {
                        return {}
                    }
                }


                this.setState({
                    result: this.state.result + "."
                })
            } else {
                this.setState({
                    result: "0."
                })
            }

            // not allowed consecutifs zeros 
        } else if (button === "0" && this.state.result === "0") {
            this.reset()
        } 

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    }

    calculate = () => {
        // calculate the total only if the last stockNumber is NOT a operators.

        

        try {
            this.setState({
                // eslint-disable-next-line 
                result: (eval(this.state.result) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    }

    // On key "C" pressed
    reset = () => {
        this.setState({
            stockNumber: "0",
            result: ""
        })
    }




    render() {
        return (
            <div className="main-calculator">
                <div className="lightgrey-calculator">
                    <Display result={this.state.result || "0"} />
                    <KeysPad onClick={this.onClick} />
                </div>
            </div>
        )
    }
}

export default Calculator
