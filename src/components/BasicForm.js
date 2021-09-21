import { useState } from "react";
import useInput2 from "../hooks/useInput2";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: userName,
    valueIsValid: userNameIsValid,
    showError: userNameShowError,
    valueChangeHandler: userNameChangeHandler,
    isTouchedHandler: userNameTouchedHandler,
    reset: resetUserName,
  } = useInput2(isNotEmpty);

  const {
    value: secondName,
    valueIsValid: secondNameIsValid,
    showError: secondNameShowError,
    valueChangeHandler: secondNameChangeHandler,
    isTouchedHandler: secondNameTouchedHandler,
    reset: resetSecondName,
  } = useInput2(isNotEmpty);

  const {
    value: email,
    valueIsValid: emailIsValid,
    showError: emailShowError,
    valueChangeHandler: emailChangeHandler,
    isTouchedHandler: emailTouchedHandler,
    reset: resetEmail,
  } = useInput2(isEmail);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!userNameIsValid || !emailIsValid || !secondNameIsValid) {
      return;
    }
    console.log("Submitted.");
    resetUserName();
    resetSecondName();
    resetEmail();
  };

  const nameInputClasses = userNameShowError
    ? "form-control invalid"
    : "form-control";

  const secondNameInputClasses = secondNameShowError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailShowError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={userNameTouchedHandler}
            onChange={userNameChangeHandler}
            value={userName}
          />
          {userNameShowError && (
            <p className={"error-text"}>Please enter a valid first name</p>
          )}
        </div>
        <div className={secondNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onBlur={secondNameTouchedHandler}
            onChange={secondNameChangeHandler}
            value={secondName}
          />
          {secondNameShowError && (
            <p className={"error-text"}>Please enter a valid second name</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onBlur={emailTouchedHandler}
          onChange={emailChangeHandler}
          value={email}
        />
        {emailShowError && (
          <p className={"error-text"}>Please enter a valid email address</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
