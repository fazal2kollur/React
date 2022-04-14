import { useState } from "react";

const DemoContext = () => {
    const [name, setName] = useState("Fazal");
 

    return (
        <>
            {name}
        </>
    );
};

export default DemoContext;