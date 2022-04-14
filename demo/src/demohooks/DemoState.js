import { useState } from "react";

const DemoState = () => {
    const [name, setName] = useState("Fazal");

    let onChange = (event) => {
        const newValue = event.target.value;
        setName(newValue);
    };

    return (
        <>
            <form>
                <input placeholder="Typing..." onChange={onChange} />
                {name}
            </form>
        </>
    );
};

export default DemoState;