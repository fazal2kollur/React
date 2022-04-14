import { useState } from "react";

const DemoEffect = () => {
    const [name, setName] = useState("Fazal");
 

    return (
        <>
            {name}
        </>
    );
};

export default DemoEffect;