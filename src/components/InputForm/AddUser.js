import InputForm from "./InputForm";

const AddUser = (props) => {
  const AddUserHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };

    props.onAddUser(userData);
  };

  return <InputForm onSaveUserData={AddUserHandler} />;
};

export default AddUser;
