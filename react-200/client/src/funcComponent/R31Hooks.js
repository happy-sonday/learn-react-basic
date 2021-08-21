import React, { useEffect, useState } from "react";

function R31Hook(props) {
  const [contents, setContents] = useState("[ THIS IS REACT ]");

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div>
      <h2>{contents}</h2>
      <button onClick={() => setContents("[ THIS IS HOOK ]")}>버튼</button>
    </div>
  );
}

export default R31Hook;
