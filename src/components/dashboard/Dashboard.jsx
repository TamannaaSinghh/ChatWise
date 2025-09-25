import React from "react";
import "./dashboard.css";
import { useUserStore } from "../../lib/userStore";

const Dashboard = () => {
  const { currentUser } = useUserStore();
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Dashboard</h2>
        <p className="dashboard-subtitle">Welcome{currentUser?.username ? `, ${currentUser.username}` : ""}!</p>
      </div>
      <section className="dashboard-card">
        <h3 className="card-title">About ChatWise</h3>
        <p className="card-body">
          ChatWise is a real-time messaging platform focused on speed, privacy, and simplicity.
          Share messages and media, manage your conversations, and collaborate with friends or teams.
        </p>
        <ul className="card-list">
          <li>Clean, distraction-free chat interface</li>
          <li>Upload images and share files seamlessly</li>
          <li>Smart user list with quick search</li>
          <li>Per-chat details and controls</li>
        </ul>
        <p className="card-footnote">Select a conversation from the left to start chatting.</p>
      </section>
    </div>
  );
};

export default Dashboard;
