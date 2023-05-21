import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import Layouts from "../src/layouts/Layouts";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState("1st");
  const onClick = (value) =>
      activeFaq === value ? setActiveFaq("") : setActiveFaq(value),
    classNameChange = (value) => (value === activeFaq ? "" : "show");
  return (
    <Layouts>
      <div className="primary-content-area section-medium content-padding">
        <div className="page-title text-center">
          <h2>
            Frequently <span className="gradient-text">Asked Questions</span>
          </h2>
        </div>
        <Accordion defaultActiveKey={activeFaq} className="accordion">
          <div className="accordion-card">
            <div className="card-header">
              <Accordion.Toggle
                onClick={() => onClick("1st")}
                as={"div"}
                eventKey="1st"
                className="card-button"
              >
                <div className="card-title">
                  How can I join Vidispark? Can anyone do it?
                </div>
                <div className="icon-box">
                  <svg
                    className={`crumina-icon plus-icon ${classNameChange(
                      "1st"
                    )}`}
                  >
                    <use xlinkHref="#minus-icon" />
                  </svg>
                  <svg className="crumina-icon minus-icon">
                    <use xlinkHref="#minus-icon" />
                  </svg>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="1st" className="card-body">
              <div className="card-info">
                To join Vidispark, simply visit our website. You can sign up for
                an account and start exploring the platform.
              </div>
            </Accordion.Collapse>
          </div>
          <div className="accordion-card">
            <div className="card-header">
              <Accordion.Toggle
                onClick={() => onClick("2nd")}
                as={"div"}
                eventKey="2nd"
                className="card-button"
              >
                <div className="card-title">Can anyone join Vidispark? </div>
                <div className="icon-box">
                  {" "}
                  <svg
                    className={`crumina-icon plus-icon ${classNameChange(
                      "2nd"
                    )}`}
                  >
                    <use xlinkHref="#minus-icon" />
                  </svg>
                  <svg className="crumina-icon minus-icon">
                    <use xlinkHref="#minus-icon" />
                  </svg>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"2nd"} className="card-body">
              <div className="card-info">
                es, Vidispark is open to anyone who is interested in video
                streaming, creating content, or engaging with creators and their
                communities. Whether you're a viewer, a creator, or a brand
                looking to collaborate, you can join Vidispark and be part of
                our community.
              </div>
            </Accordion.Collapse>
          </div>
          <div className="accordion-card">
            <div className="card-header">
              <Accordion.Toggle
                onClick={() => onClick("3rd")}
                as={"div"}
                eventKey="3rd"
                className="card-button"
              >
                <div className="card-title">
                  How do I become a creator on Vidispark?
                </div>
                <div className="icon-box">
                  {" "}
                  <svg
                    className={`crumina-icon plus-icon ${classNameChange(
                      "3rd"
                    )}`}
                  >
                    <use xlinkHref="#minus-icon" />
                  </svg>
                  <svg className="crumina-icon minus-icon">
                    <use xlinkHref="#minus-icon" />
                  </svg>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"3rd"} className="card-body">
              <div className="card-info">
                If you're interested in becoming a creator on Vidispark, you can
                sign up as a creator when registering for an account. Once your
                account is created, you can start uploading your videos,
                engaging with your audience, and building your fanbase.
              </div>
            </Accordion.Collapse>
          </div>
          <div className="accordion-card">
            <div className="card-header">
              <Accordion.Toggle
                onClick={() => onClick("4th")}
                as={"div"}
                eventKey="4th"
                className="card-button"
              >
                <div className="card-title">
                  What are the benefits of being a creator on Vidispark?{" "}
                </div>
                <div className="icon-box">
                  {" "}
                  <svg
                    className={`crumina-icon plus-icon ${classNameChange(
                      "4th"
                    )}`}
                  >
                    <use xlinkHref="#minus-icon" />
                  </svg>
                  <svg className="crumina-icon minus-icon">
                    <use xlinkHref="#minus-icon" />
                  </svg>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"4th"} className="card-body">
              <div className="card-info">
                As a creator on Vidispark, you'll have access to a wide audience
                of viewers who are passionate about content creation. You can
                monetize your videos, connect with your fans, collaborate with
                brands, and potentially earn revenue through various channels
                such sponsorships.
              </div>
            </Accordion.Collapse>
          </div>
          <div className="accordion-card">
            <div className="card-header">
              <Accordion.Toggle
                onClick={() => onClick("5th")}
                as={"div"}
                eventKey="5th"
                className="card-button"
              >
                <div className="card-title">
                  How does the earnings system work?
                </div>
                <div className="icon-box">
                  {" "}
                  <svg
                    className={`crumina-icon plus-icon ${classNameChange(
                      "5th"
                    )}`}
                  >
                    <use xlinkHref="#minus-icon" />
                  </svg>
                  <svg className="crumina-icon minus-icon">
                    <use xlinkHref="#minus-icon" />
                  </svg>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"5th"} className="card-body">
              <div className="card-info">
                A non-fungible token (NFT) is a unit of data stored on a digital
                ledger, called a blockchain, that certifies a digital asset to
                be unique and therefore not interchangeable. NFTs can be used to
                represent items such as photos, videos, audio, and other types
                of digital files. Access to any copy of the original file,
                however, is not restricted to the buyer of the NFT. While copies
                of these digital items are available for anyone to obtain, NFTs
                are tracked on blockchains to provide the owner with a proof of
                ownership that is separate from copyright.
              </div>
            </Accordion.Collapse>
          </div>
          <div className="accordion-card">
            <div className="card-header">
              <Accordion.Toggle
                onClick={() => onClick("6th")}
                as={"div"}
                eventKey="6th"
                className="card-button"
              >
                <div className="card-title">
                  Collectors have different account from creators?
                </div>
                <div className="icon-box">
                  {" "}
                  <svg
                    className={`crumina-icon plus-icon ${classNameChange(
                      "6th"
                    )}`}
                  >
                    <use xlinkHref="#minus-icon" />
                  </svg>
                  <svg className="crumina-icon minus-icon">
                    <use xlinkHref="#minus-icon" />
                  </svg>
                </div>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={"6th"} className="card-body">
              <div className="card-info">
                A non-fungible token (NFT) is a unit of data stored on a digital
                ledger, called a blockchain, that certifies a digital asset to
                be unique and therefore not interchangeable. NFTs can be used to
                represent items such as photos, videos, audio, and other types
                of digital files. Access to any copy of the original file,
                however, is not restricted to the buyer of the NFT. While copies
                of these digital items are available for anyone to obtain, NFTs
                are tracked on blockchains to provide the owner with a proof of
                ownership that is separate from copyright.
              </div>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </div>
    </Layouts>
  );
};
export default Faq;
