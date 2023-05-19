import React, { useState, useEffect, useContext } from "react";
import { useUser } from "../../../services/user";
import { Web3Storage } from "web3.storage";
import { v4 as uuidv4 } from "uuid";

const ProfileInfoForm = () => {
  const { updateUser, userInfo } = useUser();

  return (
    <div className="cryptoki-form" id="personal-info-form">
      <div className="user-db-title">Vidispark AI</div>

      <div className="form-field ">
        <label htmlFor="message">
          Genereate your video captions with VidisAI
        </label>
        <input
          id="message"
          name="message"
          className="comment-form message"
          cols={20}
          rows={10}
          // value={bio}
          // onChange={(e) => {
          //   setBio(e.target.value);
          // }}
          data-val="\S"
          data-val-msg="* Please, type a message."
          data-val-msg-id="textareaMessage"
          required=""
          // defaultValue={userInfo[0]?.data?.bio}
        />
        <span className="input_error-message" id="textareaMessage" />
      </div>

      <button
        onClick={() => {
          // onUpdateUserDataHandler();
        }}
        className="btn btn-wide btn-dark tw-mt-3"
      >
        Submit{" "}
      </button>
    </div>
  );
};

export default ProfileInfoForm;
