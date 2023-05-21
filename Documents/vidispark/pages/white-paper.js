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
      <embed
        src="/white-paper.pdf"
        width="100%"
        height="800px"
        type="application/pdf"
      />
    </Layouts>
  );
};
export default Faq;
