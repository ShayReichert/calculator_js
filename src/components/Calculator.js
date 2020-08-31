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

    // switch
    handleButton = (button) => {
        switch(button) {
            case 'C':
                this.reset();
              break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
              this.handleDigit(button);
              break;
            case '+':
            case '-':
            case '*':
            case '/':
              this.handleOperator(button);
              break;
            case '=':
              this.calculate();
              break;
            case '.':
              this.handleDecimal();
              break;
            default:
              console.error('Ooops');
          }
    }


    // On key "C" pressed
    reset = () => {
        this.setState({
            stockNumber: "0",
            result: ""
        })
    }

        // add digit
        handleDigit = (digit) => {
            const { stockNumber } = this.state
            // add digit only if the stockNumber is differente from 0
            this.setState({
                stockNumber: stockNumber !== '0' ? `${stockNumber}${digit}` : digit,
            })
        }


    // handle operators
    handleOperator = (operator) => {
        const operators = ["-",  "+",  "/",  "*"]
        const { stockNumber, result } = this.state
        const minus = "-"

        if (/[+\-*/]/.test(stockNumber)) {
            console.log("il y a déjà un opérateur dans stockNumber")

            // if the operator is the last thing in stockNumber, replace it
            if (operators.includes(stockNumber[stockNumber.length - 1])) {
                console.log("voici l'opérateur présent juste avant : " + stockNumber[stockNumber.length - 1])

                if (operator !== "-") {
                    console.log("le nouveau opérateur n'est pas le signe moins")
                    this.setState({
                        stockNumber: operator
                    })
                } else if (!minus.includes(stockNumber[stockNumber.length - 1])) {
                    console.log("l'ancien opérateur n'est pas le signe moins")
                    this.setState({
                        stockNumber: `${stockNumber}${operator}`
                    })
                }
            } else {
                // if the preview operator is followed by numbers : calculate the result and include the operator
                console.log("l'opérateur d'avant était suivi de nombres : on calcule le résultat et on affiche le nouvel opérateur")
                this.setState({
                    stockNumber: operator,
                    // eslint-disable-next-line 
                    result: Math.round(eval(`${result}${stockNumber}`) * 10000) / 10000,
                })
            }
        } else {
            //there is no operators, calculate normaly
            console.log("calcul normal")
            this.setState({
                stockNumber: operator + " ",
                result: stockNumber
            })
        }
    }



    calculate = () => {
        const operators = ["-",  "+",  "/",  "*"]
        const { stockNumber, result } = this.state
        //calculate only if the stockNumber is NOT a operators.
        if (!operators.includes(stockNumber[stockNumber.length - 1])) {
            console.log("consolelog : " + stockNumber[stockNumber.length - 1])
            this.setState({
                // eslint-disable-next-line 
                stockNumber: Math.round(eval(`${result}${stockNumber}`) * 10000) / 10000,
                result: ''
            })
        } else {
            return console.log("operation impossible")
        }
    }

    // add decimal point
    handleDecimal = () => {
        const { stockNumber } = this.state
        // add point only if no point is already included
        if(!stockNumber.includes(".")) {
            this.setState({
                stockNumber: `${stockNumber}.`
              })
        }
    }





    render() {
        const { stockNumber, result } = this.state
        return (
            <div className="main-calculator">
                <div className="lightgrey-calculator">
                    <Display result={result} stockNumber={stockNumber} />
                    <KeysPad onClick={this.handleButton} />
                </div>
            </div>
        )
    }
}

export default Calculator
