import React, { useEffect, useState } from "react";

function Counter() {
    const [countValue, setCountvalue] = useState(0);

    const [colourval, setColourval] = useState("red");

    useEffect(() => {
        console.log("inside use effects" + " " + countValue);

        return () => {
            console.log("Clean up" + " " + countValue);
        };
    }, [countValue]);

    const onIncrement = () => {
        setCountvalue(countValue + 1);

    };

    const onDecrement = () => {
        if (countValue > 0) {
            setCountvalue(countValue - 1);
        }

    };

    const changeRed = () => {
        setColourval('red')
    }
    const changeGreen = () => {
        setColourval('green')
    }

    return (
        <div>
            <div className="container">
            <h2>Counter</h2>
            <button onClick={onIncrement}>+</button>
            <div className="counter-value" style={{ backgroundColor: colourval }}>
                <p>{countValue}</p>
            </div>
            <button onClick={onDecrement}>-</button>


            <div>
                <button onClick={changeRed}>Red</button>
                <button onClick={changeGreen}>Green</button>
            </div>
            </div>
        </div>
    );
}

export default Counter;
