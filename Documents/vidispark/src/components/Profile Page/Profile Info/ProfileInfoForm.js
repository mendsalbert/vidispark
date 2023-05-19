import React, { useState, useEffect, useContext } from "react";
import { useUser } from "../../../services/user";
import { Web3Storage } from "web3.storage";
import { v4 as uuidv4 } from "uuid";

const ProfileInfoForm = () => {
  const { updateUser, userInfo } = useUser();
  const [isLoadingUrl, setIsloadingUrl] = useState(false);
  const [isCoverLoading, setIsCoverLoaidng] = useState(false);
  const [urlReady, setUrlReady] = useState(false);
  const [url, setUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [coverReady, setCoverReady] = useState(false);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    console.log(e);
    handleUpload(file, type);
  };

  const handleUpload = async (file, type) => {
    console.log(type);
    if (file) {
      type == "avatar" ? setIsloadingUrl(true) : setIsCoverLoaidng(true);
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENjNEYzZTkxZUVBNmFFRGRBMTA1RmE3QjZDZjA0NzJFQjUxMDdjMGMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODM1NjI0MDYyNzksIm5hbWUiOiJ2aWRpc3BhcmsifQ.4FBhhTMnQ3hY-P-ccuX_jKf-6ml4q6gLG9xIr0a-8Xk"; // Replace with your actual Web3.Storage API token
      const fileName = file.name;
      const client = new Web3Storage({ token });
      const cid = await client.put([file], { name: fileName });
      console.log(
        "Clickable link",
        `https://${cid}.ipfs.dweb.link/${fileName}`
      );
      if (type === "avatar") {
        setUrlReady(true);
        setUrl(`https://${cid}.ipfs.dweb.link/${fileName}`);
        setIsloadingUrl(false);
      } else if (type === "cover") {
        setCoverReady(true);
        setCoverUrl(`https://${cid}.ipfs.dweb.link/${fileName}`);
        setIsCoverLoaidng(false);
      }
    } else {
      console.log("No file selected");
    }
  };

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [marketPrice, setMarketPrice] = useState("");
  const [prevbrands, setPrevbrands] = useState("");
  const [marketBio, setMarketBio] = useState("");

  const onUpdateUserDataHandler = () => {
    const updatedUserData = {
      username: username !== "" ? username : userInfo[0]?.data?.username,
      email: email !== "" ? email : userInfo[0]?.data?.email,
      fullname: fullname !== "" ? fullname : userInfo[0]?.data?.fullname,
      bio: bio !== "" ? bio : userInfo[0]?.data?.bio,
      contact: contact !== "" ? contact : userInfo[0]?.data?.contact,
      url: url !== "" ? url : userInfo[0]?.data?.url,
      cover: coverUrl !== "" ? coverUrl : userInfo[0]?.data?.avatarCover,
      marketPrice:
        marketPrice !== "" ? marketPrice : userInfo[0]?.data?.marketPrice,
      prevbrands:
        prevbrands !== "" ? prevbrands : userInfo[0]?.data?.prevBrands,
      marketBio: marketBio !== "" ? marketBio : userInfo[0]?.data?.marketBio,
    };

    updateUser(updatedUserData);
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
