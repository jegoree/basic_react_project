import React, { useState } from "react";

import Modal from "./Modal";

import "./InputForm.scss";

const InputForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredName || !enteredAge) {
      setIsValid(!setIsValid);
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    const userData = {
      username: enteredName,
      age: +enteredAge,
    };

    props.onSaveUserData(userData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div className='container'>
      {!isValid && <Modal onClick={() => setIsValid(true)} />}
      <div className='card'>
        <form className='card_form' onSubmit={submitHandler}>
          <div className='input'>
            <label className='input_label' htmlFor='username'>
              Username
            </label>
            <input
              className='input_field'
              id='username'
              type='text'
              value={enteredName}
              onChange={nameInputHandler}
            />
          </div>
          <div className='input'>
            <label className='input_label' htmlFor='age'>
              Age
            </label>
            <input
              className='input_field'
              id='age'
              type='number'
              value={enteredAge}
              onChange={ageInputHandler}
            />
          </div>
          <button className='card_button'>Add User</button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
