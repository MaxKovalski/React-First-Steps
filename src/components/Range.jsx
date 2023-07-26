import { useState } from "react";
import "../style/settings.css";
export default function Range({ title, value, min, max, change }) {
  const [num, setNum] = useState(value);
  function changeVal(ev) {
    const val = ev.target.value;
    setNum(val);
    change(val);
  }
  return (
    <div className="range">
      <b>{title}</b>
      <input
        type="range"
        value={num}
        min={min}
        max={max}
        onChange={changeVal}
      />
      <input
        type="number"
        value={num}
        min={min}
        max={max}
        onChange={changeVal}
      />
    </div>
  );
}
