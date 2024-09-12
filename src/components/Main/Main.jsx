import React, { useContext, useState } from "react";
import "../Main/Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

export default function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const valueCard = (value) => {
    let prompt;
    if (value === 0) {
      prompt = "แนะนำร้านอาหารที่นิยมในจันทบุรี";
    } else if (value === 1) {
      prompt = "แนะนำที่พักในจันทบุรีในตัวเมือง";
    } else if (value === 2) {
      prompt = "แนะนำกิจกรรมพิเศษที่ควรทำเมื่อมาเที่ยวจันทบุรี";
    } else if (value === 3) {
      prompt = "แนะนำเทศกาลและกิจกรรมพิเศษที่มีในจันทบุรี";
    }

    setInput(prompt); // กำหนดค่าของ input
    onSent(prompt); // ส่ง prompt ที่ต้องการไปที่ฟังก์ชัน onSent โดยตรง
  };
  

  return (
    <div className="main">
      <div className="nav">
        <p>แชทบอทแนะนำการท่องเที่ยว</p>
        <img src={assets.user_icon} />
      </div>
      <div className="main-container">

        {!showResult ? <>
            <div className="greet">
          <p>
            <span>ฉันจะคอยให้คำแนะนำการท่องเที่ยวและการเดินทาง. </span>
          </p>
          <p>บอกฉันมาได้เลยว่าคุณต้องการให้ช่วยอะไร</p>
        </div>
        <div className="cards">
          <div className="card" onClick={() => valueCard(0)}>
            <p>แนะนำร้านอาหารที่นิยมในจันทบุรี</p>
          </div>
          <div className="card" onClick={() => valueCard(1)}>
            <p>แนะนำที่พักในจันทบุรีในตัวเมือง</p>
          </div>
          <div className="card" onClick={() => valueCard(2)}>
            <p>แนะนำกิจกรรมพิเศษที่ควรทำเมื่อมาเที่ยวจันทบุรี</p>
          </div>
          <div className="card" onClick={() => valueCard(3)}>
            <p>แนะนำเทศกาลและกิจกรรมพิเศษที่มีในจันทบุรี</p>
          </div>
        </div>
        </> : <div className="result">
            <div className="result-title">
                <img src={assets.user_icon}/>
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                {loading? <>
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                </>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>  }
            </div>
            </div>}
        
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              {input?<img src={assets.send_icon} onClick={() => onSent()}/>:null}
            </div>
          </div>
          <p className="bottom-info">
              ช่วยให้คำแนะนำเกี่ยวกับการท่องเที่ยวและวางแผนในการเดินทาง.
          </p>
        </div>
      </div>
    </div>
  );
}
