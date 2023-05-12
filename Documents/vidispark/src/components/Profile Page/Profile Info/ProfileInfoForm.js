import React, { useState, useEffect, useContext } from "react";
import { useUser } from "../../../services/user";
import { Web3Storage } from "web3.storage";
import { v4 as uuidv4 } from "uuid";

const ProfileInfoForm = () => {
  const { updateUser, userInfo } = useUser();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoadingUrl, setIsloadingUrl] = useState(false);
  const [urlReady, setUrlReady] = useState(false);
  const [url, setUrl] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    handleUpload();
  };

  const handleUpload = async () => {
    console.log("uploading");
    setIsloadingUrl(true);
    if (selectedFile) {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENjNEYzZTkxZUVBNmFFRGRBMTA1RmE3QjZDZjA0NzJFQjUxMDdjMGMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODM1NjI0MDYyNzksIm5hbWUiOiJ2aWRpc3BhcmsifQ.4FBhhTMnQ3hY-P-ccuX_jKf-6ml4q6gLG9xIr0a-8Xk"; // Replace with your actual Web3.Storage API token
      const ext = selectedFile.name.split(".").pop();
      const fileName = `${uuidv4()}.${ext}`;

      const client = new Web3Storage({ token });
      const cid = await client.put([selectedFile], { name: fileName });
      console.log("Image uploaded with CID:", cid);
      console.log("clicable link", `https://${cid}.ipfs.dweb.link/${fileName}`);
      setUrlReady(true);
      setUrl(`https://${cid}.ipfs.dweb.link/${fileName}`);
      setIsloadingUrl(false);
    } else {
      console.log("No file selected");
    }
  };

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [avatarurl, setAvatarurl] = useState("");

  const onUpdateUserDataHandler = () => {
    updateUser({ username, email, fullname, bio, contact });
  };

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
            defaultValue={parseInt(userInfo[0]?.data?.contact)}
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
        <input
          type="file"
          id="fileInput"
          className="tw-hidden"
          onChange={handleFileChange}
        />
        {/* {isLoadingUrl ? } */}
        {/* <label htmlFor="fileInput">
          <div className="user-avatar">
            <img
              src="https://i.ibb.co/0C0Dkz1/placeholder-image-person-jpg.jpg"
              alt=""
            />
          </div>
        </label> */}
        <div className="tw-flex tw-justify-center tw-items-center">
          <div className="tw-animate-spin tw-rounded-full tw-h-8 tw-w-8 tw-border-t-2 tw-border-b-2 tw-border-gray-900"></div>
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
