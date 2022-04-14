import { useState } from "react";

const DemoLayoutEffect = () => {
    const [name, setName] = useState("Fazal");
 

    return (
        <>
            {name}
        </>
    );
};

export default DemoLayoutEffect;