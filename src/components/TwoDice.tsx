import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    console.log("d6 called");
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDiceVal, setLeftDiceVal] = useState<number>(3);
    const [rightDiceVal, setRightDiceVal] = useState<number>(2);
    return (
        <div>
            Two Dice <br />
            <span data-testid="left-die">Left Dice: {leftDiceVal}</span> <br />
            <span data-testid="right-die">Right Dice: {rightDiceVal}</span>{" "}
            <br />
            <Button
                onClick={() => {
                    setLeftDiceVal(d6());
                    console.log("Left Button Clicked");
                }}
            >
                Roll Left
            </Button>
            <br />
            <Button
                onClick={() => {
                    setRightDiceVal(d6());
                    console.log("right");
                }}
            >
                Roll Right
            </Button>
            <div>
                {leftDiceVal === 1 && rightDiceVal === 1 ?
                    <span>You Lose!</span>
                : leftDiceVal === rightDiceVal ?
                    <span>You Win!</span>
                :   <span>Game In Progress</span>}
            </div>
        </div>
    );
}
