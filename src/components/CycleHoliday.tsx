import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*
- Birthday
- Christmas 
- Dragon Boat Festival
- Halloween  
- Thanksgiving
*/

/*
const HOLIDAY_CYCLE_ALPHABETICALLY: Record<string, string> = {
    Birthday: "Christmas",
    Christmas: "Dragon Boat Festival",
    "Dragon Boat Festival": "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Birthday",
};

const HOLIDAY_CYCLE_YEAR: Record<string, string> = {
    Birthday: "Dragon Boat Festival",
    "Dragon Boat Festival": "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "Birthday",
};
*/

const HOLIDAY_CYCLE_ALPHABETICALLY: Record<string, string> = {
    "🎂": "🎄",
    "🎄": "🐉",
    "🐉": "🎃",
    "🎃": "🦃",
    "🦃": "🎂",
};

const HOLIDAY_CYCLE_YEAR: Record<string, string> = {
    "🎂": "🐉",
    "🐉": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎂",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎂");

    function changeHolidayAlphabetically(): void {
        const newHoliday = HOLIDAY_CYCLE_ALPHABETICALLY[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayYearly(): void {
        const newHoliday = HOLIDAY_CYCLE_YEAR[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            Cycle Holiday <br />
            <Button
                onClick={() => {
                    changeHolidayAlphabetically();
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    changeHolidayYearly();
                }}
            >
                Advance by Year
            </Button>
            <br />
            <span>Holiday: {holiday}</span>
        </div>
    );
}
