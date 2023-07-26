import { useState } from "react";
import "../style/settings.css";
import Range from "./Range";
export default function Settings() {
  // states
  const [bright, setBright] = useState(10);
  const [gap, setGap] = useState(1);
  const [font, setFont] = useState(100);
  const [pad, setPad] = useState(10);
  const [color, setColor] = useState(10);
  const [blur, setBlur] = useState(0);
  const htmlChange = document.querySelector("html");
  //   functions that change
  function changeBright(num) {
    setBright(num);
    htmlChange.style.filter = `brightness(${num}%)`;
  }
  function changeGap(num) {
    setGap(num);
    htmlChange.style.letterSpacing = `${num}px`;
  }
  function changeFont(num) {
    setFont(num);
    htmlChange.style.fontSize = `${num}%`;
  }
  function changePad(num) {
    setPad(num);
    document.querySelector("body").style.padding = `${num}px`;
  }
  function changeColor(num) {
    setColor(num);
    htmlChange.style.filter = `invert(${num}%)`;
  }
  function changeBlur(num) {
    setBlur(num);
    htmlChange.style.filter = `blur(${num}px)`;
    console.log(blur);
  }

  //   inputs
  return (
    <div className="setting">
      <div>
        <Range
          title={"בהירות:"}
          value={bright}
          min={0}
          max={100}
          change={changeBright}
        />
      </div>
      <div>
        <Range
          title={"ריווח בין תווים:"}
          value={gap}
          min={0}
          max={10}
          change={changeGap}
        ></Range>
      </div>
      <div>
        <Range
          title={"גודל הגופן:"}
          value={font}
          min={0}
          max={100}
          change={changeFont}
        ></Range>
      </div>
      <div>
        <Range
          title={"ריווח של הדף:"}
          value={gap}
          min={10}
          max={100}
          change={changePad}
        ></Range>
      </div>
      <div>
        <Range
          title={"היפוך צבעים:"}
          value={color}
          min={0}
          max={100}
          change={changeColor}
        ></Range>
      </div>
      <div>
        <Range
          title={"טשטוש"}
          value={blur}
          min={0}
          max={100}
          change={changeBlur}
        ></Range>
      </div>
    </div>
  );
}
