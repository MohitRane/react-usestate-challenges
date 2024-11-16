import React from "react"

export default function State() {
    // const result = React.useState("Yes")

    /* Array Destructuring  */
    // const [isImportant, func] = React.useState("Yes")
    const [isImportant, setIsImportant] = React.useState("Yes")
    function handleClick() {
        setIsImportant("No")
    }
    
    return (
        <div>
            {/* State Practice */}
            <div className="state">
                <h1 className="state--title">Is state important to know?</h1>
                <div className="state--value" onClick={handleClick}>
                    <h1>{isImportant}</h1>
                    {/* <h1>{result[0]}</h1> */}
                </div>
            </div><hr />
        </div>
    )
}
