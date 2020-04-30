import React from "react"

const Rounds = (props) => {
    
    return (
        <section>
            <button id="round-1" onClick={props.handleRoundPick} className="btn selected-round">1</button>
            <button id="round-2" onClick={props.handleRoundPick} className="btn">2</button>
            <button id="round-3" onClick={props.handleRoundPick} className="btn">3</button>
            <button id="round-4" onClick={props.handleRoundPick} className="btn">4</button>
            <button id="round-5"onClick={props.handleRoundPick} className="btn">5</button>
            <button id="round-6" onClick={props.handleRoundPick} className="btn">6</button>
            <button id="round-7" onClick={props.handleRoundPick} className="btn">7</button>
        </section>
    ) 
}

export default Rounds