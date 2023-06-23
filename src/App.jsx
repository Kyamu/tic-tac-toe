import React, { useState } from "react";
import Icon from "./components/Icon";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let tikArray = new Array(9).fill("");
//["cross", "circle", "cross", "circle", "cross", "circle", "cross", "circle", "cross"];

const App = () => {
    let [isCross, setIsCross] = useState(true);
    let [winMessage, setWinMessage] = useState("");

    //Play again
    const playAgain = () => {
        tikArray.fill("");
        setIsCross(true);
        setWinMessage("");
    }

    //Find winner
    const findWinner = () => {
        //Row 1
        if (tikArray[0] == tikArray[1] && tikArray[0] == tikArray[2] && tikArray[0] != "") {
            setWinMessage(tikArray[0] + " has won");
        }
        //Row 2
        else if (tikArray[3] == tikArray[4] && tikArray[3] == tikArray[5] && tikArray[3] != "") {
            setWinMessage(tikArray[3] + " has won");
        }
        //Row 3
        else if (tikArray[6] == tikArray[7] && tikArray[6] == tikArray[8] && tikArray[6] != "") {
            setWinMessage(tikArray[6] + " has won");
        }
        //Column 1
        else if (tikArray[0] == tikArray[3] && tikArray[0] == tikArray[6] && tikArray[0] != "") {
            setWinMessage(tikArray[0] + " has won");
        }
        //Column 2
        else if (tikArray[1] == tikArray[4] && tikArray[1] == tikArray[7] && tikArray[1] != "") {
            setWinMessage(tikArray[1] + " has won");
        }
        //Column 3
        else if (tikArray[2] == tikArray[5] && tikArray[2] == tikArray[8] && tikArray[2] != "") {
            setWinMessage(tikArray[2] + " has won");
        }
        //Diagonal 1
        else if (tikArray[0] == tikArray[4] && tikArray[0] == tikArray[8] && tikArray[0] != "") {
            setWinMessage(tikArray[0] + " has won");
        }
        //Diagonal 2
        else if (tikArray[2] == tikArray[4] && tikArray[2] == tikArray[6] && tikArray[2] != "") {
            setWinMessage(tikArray[2] + " has won");
        }

        //Draw condition
        else if (tikArray.indexOf("") == -1) {
            setWinMessage("Draw");
        }

    }

    //Change Item
    const changeItem = (index) => {
        if (winMessage) {
            return toast("Game has already been over");
        }
        if (tikArray[index] != "") {
            return toast("Open your eyes dude where are you tapping");
        }
        else if (tikArray[index] == "") {
            tikArray[index] = isCross == true ? "cross" : "circle";
            setIsCross(!isCross);
            findWinner();
        }
    }

    // const getKey = () => {
    //     return Date.now().toString();
    // }
    return (
        <div className="container">
            <div >
                <ToastContainer position="bottom-center" />
                {
                    winMessage ? (
                        <div>
                            <h1>{winMessage.toUpperCase()}</h1>
                            <button onClick={playAgain}>Play again</button>
                        </div>
                    )
                        :
                        (<h1 >Chance of {isCross ? "Cross" : "Circle"}</h1>)
                }
                <div className="grid">
                    {
                        tikArray.map((value, index) => (
                            <div key={index} className="box" onClick={() => changeItem(index)}>
                                <Icon ic={value} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}
export default App;

