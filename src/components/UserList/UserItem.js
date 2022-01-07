import "./UserItem.scss";

const UserItem = (props) => {
  return (
    <li className='user__profile' kay={props.id}>
      <span className='user__name'>{props.username}</span>
      <span className='user__age'> {props.age} y/o</span>
    </li>
  );
};

export default UserItem;
