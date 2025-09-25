import React from "react";
import "./sidebar.css";
import { useUserStore } from "../../lib/userStore";

const Sidebar = () => {
  const { currentUser } = useUserStore();
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-logo" aria-hidden>💬</span>
        <span className="sidebar-title">ChatWise</span>
      </div>
      <nav className="sidebar-nav">
        <a className="sidebar-link active" href="#">Dashboard</a>
        <a className="sidebar-link" href="#">Analytics</a>
        <a className="sidebar-link" href="#">Files</a>
        <a className="sidebar-link" href="#">Call</a>
        <a className="sidebar-link" href="#">Messages</a>
        <a className="sidebar-link" href="#">Community</a>
        <a className="sidebar-link" href="#">Settings</a>
      </nav>
      <div className="sidebar-user">
        <img src={currentUser?.avatar || "./avatar.png"} alt="" />
        <div className="sidebar-user-meta">
          <span className="sidebar-username">{currentUser?.username}</span>
          <span className="sidebar-status"> Logged in</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
