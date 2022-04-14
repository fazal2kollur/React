import { useEffect, useState, useMemo } from "react";

const DemoMemo = () => {

  const [name, setName] = useState("Fazal");


  return (
    <>
      {name}
    </>
  );
}