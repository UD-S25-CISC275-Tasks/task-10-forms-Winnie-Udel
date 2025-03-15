import React from "react";
import "./App.css";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <CheckAnswer expectedAnswer="Answer"></CheckAnswer>
            <hr></hr>

            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>

            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>

            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
        </div>
    );
}

export default App;
