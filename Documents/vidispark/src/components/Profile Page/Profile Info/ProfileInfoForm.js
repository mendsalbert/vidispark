import React from "react";
import { useUser } from "../../../services/user";

const ProfileInfoForm = () => {
  const { userInfo } = useUser();
  // console.log(userInfo);
  return (
    <form className="cryptoki-form" id="personal-info-form">
      <div className="user-db-title">Personal Info</div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" defaultValue="" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            defaultValue={userInfo[0]?.data?.username}
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone contact</label>
          <input type="number" id="phone" defaultValue="" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="password-1">Change password</label>
          <input type="password" name="password" id="password-1" />
        </div>
        <div className="form-field">
          <label htmlFor="password-2">Repeat password</label>
          <input type="password" name="password" id="password-2" />
        </div>
      </div>

      <div className="form-field ">
        <label htmlFor="message">Bio</label>
        <textarea
          id="message"
          name="message"
          className="comment-form message"
          cols={30}
          rows={10}
          data-val="\S"
          data-val-msg="* Please, type a message."
          data-val-msg-id="textareaMessage"
          required=""
          defaultValue={""}
        />
        <span className="input_error-message" id="textareaMessage" />
      </div>
      <button className="btn btn-wide btn-dark" type="submit">
        Save Changes
      </button>
    </form>
  );
};

export default ProfileInfoForm;
