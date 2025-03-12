import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("");
    const [canEdit, setEditMode] = useState<boolean>(false);
    const [isStudent, setStudentStatus] = useState<boolean>(true);
    const displayName = name || "Your Name";

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Check
                    inline
                    type="switch"
                    label="Turn On Edit Mode"
                    checked={canEdit}
                    onChange={(e) => {
                        setEditMode(e.target.checked);
                    }}
                ></Form.Check>
                {canEdit && (
                    <>
                        <Form.Check
                            inline
                            type="checkbox"
                            id="student-checkbox"
                            label="A Student?"
                            checked={isStudent}
                            onChange={(e) => {
                                setStudentStatus(e.target.checked);
                            }}
                        ></Form.Check>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </>
                )}
            </Form.Group>
            <div>
                {displayName} is {isStudent ? "" : "not"} a student
            </div>
        </div>
    );
}
