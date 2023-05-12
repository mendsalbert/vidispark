import React, { useState, useEffect, useContext } from "react";
import { useUser } from "../../../services/user";

const ProfileInfoForm = () => {
  const { updateUser, userInfo } = useUser();

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const onUpdateUserDataHandler = () => {
    updateUser({ username, email, fullname, bio, contact });
  };

  console.log(userInfo);

  return (
    <div className="cryptoki-form" id="personal-info-form">
      <div className="user-db-title">Personal Info</div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            defaultValue={userInfo[0]?.data?.fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            defaultValue={userInfo[0]?.data?.username}
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone"> contact</label>
          <input
            type="number"
            id="phone"
            defaultValue={userInfo[0]?.data?.contact}
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="form-group">
        <div className="form-field">
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            defaultValue={userInfo[0]?.data?.email}
          />
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
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
          }}
          data-val="\S"
          data-val-msg="* Please, type a message."
          data-val-msg-id="textareaMessage"
          required=""
          defaultValue={userInfo[0]?.data?.bio}
        />
        <span className="input_error-message" id="textareaMessage" />
      </div>

      <div className="upload-photo-box">
        <div className="user-db-title tw-mt-2">Avatar and Cover</div>
        <div className="user-avatar">
          <img src="img/content/profile/avatar-upload.png" alt="" />
        </div>
        <div className="user-cover-image">
          <img src="img/content/profile/profile-cover-1.png" alt="" />
        </div>
        <div className="upload-notice">
          Images must be .png or .jpg format. Min size 100x100px (avatar) and
          1920x320px (cover)
        </div>
      </div>
      <button
        onClick={() => {
          onUpdateUserDataHandler();
        }}
        className="btn btn-wide btn-dark tw-mt-3"
      >
        Save Changes
      </button>
    </div>
  );
};

export default ProfileInfoForm;
