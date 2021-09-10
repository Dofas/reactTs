import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";
import './userList.css';

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className="userList">
      {users.map(user => 
        <UserItem  key={user.id} user={user} />
      )}
    </div>
  );
};

export default UserList
