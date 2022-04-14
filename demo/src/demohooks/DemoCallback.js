import { useState } from "react";

const DemoCallback = () => {
    const [name, setName] = useState("Fazal");
 

    return (
        <>
            {name}
        </>
    );
};

export default DemoCallback;