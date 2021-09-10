import React, {FC} from 'react'
import { IUser } from '../../types/types'
import './UserItem.css'

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}


const UserItem: FC<UserItemProps> = ({user, onClick}) =>{
    return(
         <div onClick={()=> onClick(user)} className="listItem">
          {user.id}. {user.name} living in city {user.address.city} and
          {user.address.street} Street
        </div>
    )
}

export default UserItem