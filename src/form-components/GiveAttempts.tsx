import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(3);
    const [requestedAttempt, setRequestedAttempt] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of Attempts: {attempt}</div>
            <Form.Group>
                <Form.Label>Set Your Attempt</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempt}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestedAttempt(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                disabled={attempt === 0}
                onClick={() => {
                    setAttempt(attempt - 1);
                }}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempt(attempt + (parseInt(requestedAttempt) || 0));
                }}
            >
                gain
            </Button>
        </div>
    );
}
