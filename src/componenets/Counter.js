import React from "react"

export default function Counter() {
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    const [counter, setCounter] = React.useState(0)
    function counterPlus() {
        // setCounter(counter + 1) setCounter(function(oldValue) {     return oldValue +
        // 1 })
        setCounter(prevCount => prevCount + 1)
    }

    function counterMinus() {
        // setCounter(counter - 1) setCounter(function(oldValue) {     return oldValue -
        // 1 })
        setCounter(prevCount => prevCount - 1)
    }

    return (
        <div>
            {/* Counter State Practice */}
            <div className="counter">
                <button className="counter--minus" onClick={counterMinus}>–</button>
                <div className="counter--count">
                    <h1>{counter}</h1>
                </div>
                <button className="counter--plus" onClick={counterPlus}>+</button>
            </div><hr />
        </div>
    )
}
