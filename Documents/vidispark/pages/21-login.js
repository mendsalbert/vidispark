import React from "react";
import Layouts from "../src/layouts/Layouts";

const Login = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding">
        <div className="extra-small-section">
          <div className="page-title text-center">
            <h2>
              <span className="gradient-text">Account</span> Login
            </h2>
          </div>
          <div
            id="sign-in"
            className="tk-lp-form user-register-kit-sign tk-lp-tabs-form-content active"
            data-handler="lrk_sign_in_action"
          >
            <div className="tk-lp-alert-cont" />
            <div className="tk-lp-form-item">
              <label htmlFor="sign_in_username" className="tk-lp-label">
                Username
              </label>
              <input
                className="tk-lp-input"
                id="sign_in_username"
                name="log"
                type="text"
              />
            </div>
            <div className="tk-lp-form-item">
              <label htmlFor="sign_in_password" className="tk-lp-label">
                Password
              </label>
              <input
                className="tk-lp-input"
                id="sign_in_password"
                name="pwd"
                type="password"
              />
            </div>
            <div className="tk-lp-form-item">
              <div className="tk-lp-remember">
                <label className="tk-lp-checkbox">
                  <input
                    type="checkbox"
                    name="rememberme"
                    defaultValue="forever"
                  />
                  <span className="tk-lp-control-indicator" />
                  Remember Me
                </label>
                {/* <a
                  href="#"
                  className="tk-lp-link-lost tk-lp-tabs-form-item"
                  data-id="lost-password"
                >
                  Lost your password?
                </a> */}
              </div>
            </div>
            <button
              type="button"
              className="submit-bttn tk-lp-button tk-lp-button--dark tk-lp-w-full"
            >
              Log In
            </button>
            <button
              type="button"
              className="tk-lp-button tk-lp-button--grey tk-lp-w-full tk-lp-tabs-form-item"
              data-id="sign-up"
            >
              Create an Account
            </button>
          </div>
          <div className="social-login">
            <div className="social-login-text">Or login with your wallet</div>
            <div className="social-login-buttons">
              <button className="btn btn-normal facebook">
                <svg className="crumina-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </button>
              <button className="btn btn-normal twitter">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Login;
