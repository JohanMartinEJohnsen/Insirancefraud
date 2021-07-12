import React from "react";
import firstImg from "./Assets/pictures/firstImg.png"

interface StartPageProps {
    onClickFunction: Function,
}
const StartPage = (props : StartPageProps) => {
    return(
        <div>
            <h3> Start page</h3>
            <button onClick={() => props.onClickFunction()}></button>
        </div>
    )
}

export default StartPage;
