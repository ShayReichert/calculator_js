import React from 'react'

const Display = (props) => {

    const { stockNumber, result } = props

    return (
        <div>
            <div id="display-shadow">
                <div id="display">
                    <h2>{stockNumber} </h2>
                    <h1>{result}</h1>
                </div>
            </div>
        </div>
    )

}




export default Display
