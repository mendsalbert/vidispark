import React, { useState, useEffect, useContext } from "react";
import { useUser } from "../../../services/user";
import { Web3Storage } from "web3.storage";
import { v4 as uuidv4 } from "uuid";
import { Configuration, OpenAIApi } from "openai";

const AIpage = () => {
  const { updateUser, userInfo } = useUser();
  const configuration = new Configuration({
    organization: "org-iW0tOES3m75oHB2cx9IxyB8I",
    apiKey: process.env.GREETING,
  });

  const openai = new OpenAIApi(configuration);
  //   console.log(process.env.OPEN_AI_KEY);
  //   console.log(process.env.GREETING);
  //   console.log(process.env.GREETING);

  const generateContent = async () => {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `A student wants to learn about a  , generate 6 modules that a student can use to learn as . A module consists of a title and a description, separated by a colon.`,
      temperature: 1.4,
      top_p: 0.7,
      max_tokens: 120,
    });
    console.log(completion.data.choices[0].text);
    return completion.data.choices[0]?.text;
  };
  return (
    <div className="cryptoki-form" id="personal-info-form">
      <div className="user-db-title">Vidispark AI</div>

      <div className="form-field ">
        <label htmlFor="message">Bio</label>
        <textarea
          id="message"
          name="message"
          className="comment-form message"
          cols={30}
          rows={10}
          //   value={bio}
          //   onChange={(e) => {
          //     setBio(e.target.value);
          //   }}
          data-val="\S"
          data-val-msg="* Please, type a message."
          data-val-msg-id="textareaMessage"
          required=""
          //   defaultValue={userInfo[0]?.data?.bio}
        />
        <span className="input_error-message" id="textareaMessage" />
      </div>

      <button
        onClick={() => {
          //   console.log(process.env.OPEN_AI_KEY);
          generateContent();
          //   onUpdateUserDataHandler();
        }}
        className="btn btn-wide btn-dark tw-mt-3"
      >
        Generate{" "}
      </button>
    </div>
  );
};

export default AIpage;
