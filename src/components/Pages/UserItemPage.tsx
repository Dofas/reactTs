import React, { FC, useEffect, useState } from "react";
import { IUser } from "../../types/types";
import {useParams, useHistory} from 'react-router-dom';

interface UserItemPageParams {
    id:string,
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const history = useHistory(); 

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      const data = (await response.json()) as IUser;
      setUser(data);
    } catch (e) {
      alert(e);
    }
  }
  return (<div>
      <button onClick={()=> history.push('/users')}>Back</button>
      <h1>page for {user?.name}</h1>
      <div>
          {user?.email}
      </div>
      <div>
          {user?.address.city}
      </div>
  </div>);
};

export default UserItemPage;
