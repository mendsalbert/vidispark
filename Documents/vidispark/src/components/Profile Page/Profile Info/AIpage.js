import React, { useState, useEffect, useContext } from "react";
import { useUser } from "../../../services/user";
import { Web3Storage } from "web3.storage";
import { v4 as uuidv4 } from "uuid";
import { Configuration, OpenAIApi } from "openai";

const AIpage = () => {
  const { updateUser, userInfo } = useUser();
  const configuration = new Configuration({
    organization: "org-iW0tOES3m75oHB2cx9IxyB8I",
    apiKey: process.env.OPEN_AI_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateContent = async () => {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",

      // prompt: `

      //     As an online educational tutor, your job is to help students learn and master topics in an organized and efficient manner. Your first task is to accept a search topic from a user, and break it down into smaller modules that are easier to study and understand. For example, if a student searched for "Introduction to Computer Science", you would need to break down the topic into modules such as "History of Computers", "Software Development", "Programming Languages", "Data Structures and Algorithms" and so on.

      // Your prompt is to provide the user with a well-organized and concise set of modules, that cover all the important topics related to their search query. Make sure to explain why each module is important and how it fits into the overall topic. Additionally, you may include resources such as textbooks, online courses, videos, and interactive exercises that will help the student learn and practice the concepts in each module.

      //     Break down the concept of ${query} into smaller modules for ${preference.difficultyLevel} learners. Please use the following format for each module:

      //   1. [Module name]: [short description].

      // For example:
      // 1. some module name here: and its description here.

      // Please provide a maximum of 7 modules and a brief description for each.
      // Note: Keep the module names and descriptions consistent and avoid changing them for each request.
      // `,
      prompt: `A student wants to learn about a  , generate 6 modules that a student can use to learn as . A module consists of a title and a description, separated by a colon.`,
      temperature: 1.4,
      top_p: 0.7,
      max_tokens: 120,
    });
    console.log(completion.data.choices[0].text);
    return parseString(completion.data.choices[0]?.text);
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
          console.log(process.env.API_URL);
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
