import { useEffect, useState } from "react";
import "../style/settings.css";
import Range from "./Range";
export default function Settings2() {
  useEffect(() => {
    window.addEventListener(
      "beforeunload",
      console.log("you entered settings2")
    );
    return () => {
      window.removeEventListener(
        "beforeunload",
        console.log("you leave settings2")
      );
    };
  }, []);
  const [settings, setSettings] = useState({
    bright: 100,
    gap: 0,
    font: 100,
    pad: 0,
    color: 0,
    blur: 0,
  });
  function setParam(key, val) {
    const obj = { ...settings };
    obj[key] = val;
    setSettings(obj);
    syncData(obj);
  }
  function syncData(obj) {
    document.querySelector(
      "html"
    ).style.filter = `invert(${obj.color}%) brightness(${obj.bright}%)`;
    document.body.style.letterSpacing = `${obj.gap}px`;
    document.body.style.fontSize = `${obj.font}%`;
    document.body.style.padding = `${obj.pad}px`;
    document.body.style.filter = `blur(${obj.blur}px)`;
  }

  //   inputs
  return (
    <div className="setting">
      <div>
        <Range
          title={"בהירות:"}
          value={settings.bright}
          min={0}
          max={100}
          change={(val) => setParam("bright", val)}
        />
      </div>
      <div>
        <Range
          title={"ריווח בין תווים:"}
          value={settings.gap}
          min={0}
          max={10}
          change={(val) => setParam("gap", val)}
        ></Range>
      </div>
      <div>
        <Range
          title={"גודל הגופן:"}
          value={settings.font}
          min={0}
          max={100}
          change={(val) => setParam("font", val)}
        ></Range>
      </div>
      <div>
        <Range
          title={"ריווח של הדף:"}
          value={settings.gap}
          min={10}
          max={100}
          change={(val) => setParam("gap", val)}
        ></Range>
      </div>
      <div>
        <Range
          title={"היפוך צבעים:"}
          value={settings.color}
          min={0}
          max={100}
          change={(val) => setParam("color", val)}
        ></Range>
      </div>
      <div>
        <Range
          title={"טשטוש"}
          value={settings.blur}
          min={0}
          max={100}
          change={(val) => setParam("blur", val)}
        ></Range>
      </div>
    </div>
  );
}
