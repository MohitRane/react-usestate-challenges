import React from "react"

export default function FlipState() {
    /**
     * Use ternery operators
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    const [isGoingOut, setIsGoingOut] = React.useState(false)
    function changeMind() {
        // setIsGoingOut(prevState => prevState ? false : true);
        setIsGoingOut(prevState => !prevState);
    }

    return (
        <div>
            {/* Flipping State Practice */}
            <div className="state">
                <h1 className="state--title">Do I feel like going out tonight?</h1>
                <div className="state--value" onClick={changeMind}>
                    <h1>{isGoingOut ? "Yes" : "No"}</h1>
                </div>
            </div><hr/>
        </div>
    )
}
