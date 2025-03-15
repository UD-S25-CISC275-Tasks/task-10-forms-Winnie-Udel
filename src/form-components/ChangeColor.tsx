import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("");

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                <Form.Label>Select a color: </Form.Label>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        label={
                            <div style={{ backgroundColor: color }}>
                                {color}
                            </div>
                        }
                        value={color}
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                    ></Form.Check>
                ))}
            </Form.Group>
            You have chosen
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
/*

The ChangeColor component offers the user a bunch of radio buttons labeled with different colors; choosing a radio button updates the text and color of a nearby box of text.

You will need state to represent the chosen color
You are free to make up your own list of colors, but you must have AT LEAST 8 unique colors.
Each color must be represented by a radio button.
There should be a box of text with a data-testid="colored-box" attribute and value.
The box of text should have the same text and backgroundColor style as the currently selected radio button.
HINT: We strongly recommend you use map to render all the color’s Form.Check tags rather than hardcoding each one!

HINT: We recommend you use the inline attribute for the radio buttons.
*/
