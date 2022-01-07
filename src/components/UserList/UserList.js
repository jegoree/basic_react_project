import UserItem from "./UserItem";

import "./UserList.scss";

const UserList = (props) => {
  return (
    <div className='container'>
      <ul className='card'>
        {props.users.map((user) => (
          <UserItem key={user.id} username={user.username} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
