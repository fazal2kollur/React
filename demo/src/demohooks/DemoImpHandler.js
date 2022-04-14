import React, { useState } from "react";

 

const DemoHandler = () => {
  const [name, setName] = useState("Fazal");
 

  return (
      <>
          {name}
      </>
  );
};

export default DemoHandler;