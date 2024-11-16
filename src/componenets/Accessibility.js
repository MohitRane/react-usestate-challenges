import React from "react"

export default function Accessibility() {

    /* 
        Accessibility Practice In Above div structure 
        we are using onClick on div we should use button 
        to follow best practice 
    */
    const [isGoingOut, setIsGoingOut] = React.useState(false)
    function changeMind() {
        // setIsGoingOut(prevState => prevState ? false : true);
        setIsGoingOut(prevState => !prevState);
        console.log(isGoingOut);
    }
    
    return (
        <div>
            <div className="state">
                <h1 className="state--title">Do I feel like going out tonight?</h1>
                <button className="state--button" onClick={changeMind}>
                    {isGoingOut ? "Yes" : "No"}
                </button>
            </div><hr />
        </div>
    )
}
