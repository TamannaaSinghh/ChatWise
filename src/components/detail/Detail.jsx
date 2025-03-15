import React from "react";
import "./detail.css";
import { auth, db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { arrayRemove, arrayUnion, doc } from "firebase/firestore";

const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log("err");
    }
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eveniet a, ex dolores perferendis minus.
        </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/326612/pexels-photo-326612.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <span>photo_2025_2.png</span>
              </div>

              <img
                src="./download.png"
                alt=""
                className="
          icon"
              />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/326612/pexels-photo-326612.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <span>photo_2025_2.png</span>
              </div>

              <img
                src="./download.png"
                alt=""
                className="
          icon"
              />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/326612/pexels-photo-326612.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <span>photo_2025_2.png</span>
              </div>

              <img
                src="./download.png"
                alt=""
                className="
          icon"
              />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/326612/pexels-photo-326612.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <span>photo_2025_2.png</span>
              </div>

              <img
                src="./download.png"
                alt=""
                className="
          icon"
              />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/326612/pexels-photo-326612.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <span>photo_2025_2.png</span>
              </div>

              <img
                src="./download.png"
                alt=""
                className="
          icon"
              />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button className="blockButton" onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
            ? "User Blocked!"
            : "Block User"}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
