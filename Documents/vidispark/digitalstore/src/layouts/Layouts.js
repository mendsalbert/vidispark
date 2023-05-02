import React, { useEffect } from "react";
import { connect } from "react-redux";
import ImageView from "../components/ImageView";
import SoundCloudPopup from "../components/SoundCloudPopup";
import VideoPopup from "../components/VideoPopup";
import { getBlogs } from "../redux/action/blog";
import { getCollector } from "../redux/action/collectors";
import { getCreator } from "../redux/action/creator";
import { getData } from "../redux/action/data";
import { niceSelect, notificationList, svgLoadder } from "../utils";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layouts = ({ children, getData, getCreator, getCollector, getBlogs }) => {
  useEffect(() => {
    const Waves = require("node-waves");
    getData();
    getCreator();
    getCollector();
    getBlogs();
    notificationList();
    niceSelect();
    setTimeout(() => {
      Waves.init();
      Waves.attach(".btn-dark", ["waves-button", "waves-float", "waves-light"]);
      // Waves.attach(".btn", ["waves-button", "waves-float", "waves-light"]);
      Waves.attach(".slide-button .btn", [
        "waves-button",
        "waves-float",
        "waves-light",
      ]);
      svgLoadder();
    }, 1000);
  }, []);

  return (
    <div className="main digital-store">
      <VideoPopup />
      <ImageView />
      <SoundCloudPopup />
      <div className="main">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default connect(null, { getData, getCreator, getCollector, getBlogs })(
  Layouts
);
