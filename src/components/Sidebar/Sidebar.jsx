import React, { useContext, useState } from "react";
import "../Sidebar/Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt,newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} />
          {extended ? <p>เริ่มต้นหัวข้อใหม่</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">ประวัติ</p>
            {prevPrompts.map((item, index) => {
              return (
                <div className="recent-entry" onClick={() => loadPrompt(item)}>
                  <img src={assets.message_icon} />
                  <p>{item.slice(0,18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended ? <p>About me</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} />
          {extended ? <Link to='/' style={{color: 'black', textDecoration: 'none'}}>Back</Link> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}
