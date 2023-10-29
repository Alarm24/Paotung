import React, { useState, useEffect, createContext } from "react";
import Popup from "./Popup";
export default function Gacha() {
  const [buttonPopup, setButtonPopup] = useState();
  return (
    <div>
      <header className="header"> สุ่มกาชา </header>

      <body className="Body">
        <div id="circle1">
          <img id="Bulb1" src={require("./image/bulb.png")} />
          <p id="BulbText"> จำนวน Bulb ที่ใช้ได้</p>
          <p id="BulbAmount"> XXXXX.XX </p>
        </div>

        <button
          onClick={() => setButtonPopup(true)}
          type="submit"
          id="RandomButton"
        >
          สุ่ม
        </button>
        <div id="TextBelowRandom">
          <p id="RandomCost">-10</p>
          <img id="Bulb2" src={require("./image/bulb.png")} />
        </div>
      </body>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p>ขอแสดงความยินดี !</p>
        <p>ได้รับโค้ดส่วนลด</p>
        <p id="ResultOfGacha">X%</p>
      </Popup>
    </div>
  );
}
