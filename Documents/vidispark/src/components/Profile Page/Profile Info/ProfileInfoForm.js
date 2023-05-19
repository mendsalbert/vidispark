import React, { useState, useEffect, useContext } from "react";
import { useUser } from "../../../services/user";

import { Configuration, OpenAIApi } from "openai";

const ProfileInfoForm = () => {
  const { updateUser, userInfo } = useUser();
  const configuration = new Configuration({
    organization: "org-iW0tOES3m75oHB2cx9IxyB8I",
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);
  const generateContent = async () => {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `A student wants to learn about a , generate 6 modules that a student can use to learn as . A module consists of a title and a description, separated by a colon.`,
      temperature: 1.4,
      top_p: 0.7,
      max_tokens: 120,
    });
    return parseString(completion.data.choices[0]?.text);
  };
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
          className="tw-w-full tw-rounded-full tw-ring-1 tw-py-4 tw-px-4"
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
