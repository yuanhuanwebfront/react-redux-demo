import React from "react";

const UserInfo = ({user, type}) => {
  return (
    <div>
      <p>当前类型{type}</p>
      <label>
        <span>姓名：</span> <b>{user.name}</b>
        <span>年龄：</span> <b>{user.age}</b>
        <span>账号：</span> <b>{user.account}</b>
      </label>
    </div>
  );
};

export default UserInfo;