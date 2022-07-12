import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "./Button";
import "./AddUser.css";

const AddUser = (props) => {
  const name = useRef();
  const age = useRef();
  const college = useRef();
  const [error, setError] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredname = name.current.value;
    const enteredage = age.current.value;
    const enteredcollege = college.current.value;
    if (
      enteredname.trim().length == 0 ||
      enteredage.trim().length == 0 ||
      enteredcollege.trim().length == 0
    ) {
      setError({
        title: "Invalid Username/college name",
        message: "Please enter correct username/college name !",
      });
      return;
    }
    if (+enteredage < 1) {
      setError({
        title: "Invalid Age",
        message: "Age cant be less than 1",
      });
      return;
    }
    props.onAddUser(enteredname, enteredage, enteredcollege);
    name.current.value = "";
    age.current.value = "";
    college.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={name} />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={age} />
          <label htmlFor="college">College</label>
          <input type="text" id="usercollege" ref={college} />
          <Button className="button" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
