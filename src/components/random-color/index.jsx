import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function RandomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleCreateRandomRgbcolor() {
    const r = RandomColorUtility(256);
    const g = RandomColorUtility(256);
    const b = RandomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(()=>{
    if(typeOfColor === 'rgb')
        handleCreateRandomRgbcolor();
    else handleCreateRandomHexColor();
  },[typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbcolor
        }
      >
        generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection:'column',
          gap:'20px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
