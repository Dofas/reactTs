import React, {FC} from 'react'
import { IUser } from '../types/types'
import './UserItem.css'

interface UserItemProps {
    user: IUser;
}


const UserItem: FC<UserItemProps> = ({user}) =>{
    return(
         <div className="listItem">
          {user.id}. {user.name} living in city {user.address.city} and
          {user.address.street} Street
        </div>
    )
}

export default UserItem