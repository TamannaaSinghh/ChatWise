import React from 'react'
import "./list.css"
import UserInfo from './userInfo/UserInfo'
import ChatList from './chatList/ChatList'

const List = () => {
  return (
    <div className='list'>
      <div className="listHeader">
        <h2 className="listTitle">Messages</h2>
        <div className="listHeaderIcons">
          <img src="./search.png" alt="" />
          <img src="./more.png" alt="" />
        </div>
      </div>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default List
