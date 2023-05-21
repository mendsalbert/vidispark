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
      {/* <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"> */}

      <div class="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-white dark:tw-bg-green-400 tw-py-48">
        <div class="tw-flex tw-flex-col">
          <div class="tw-flex tw-flex-col tw-mt-8">
            <div class="tw-container tw-max-w-7xl tw-px-4">
              <div class="tw-flex tw-flex-wrap tw-justify-center tw-text-center tw-mb-24">
                <div class="tw-w-full tw-lg:w-6/12 tw-px-4">
                  <h1 class="tw-text-gray-900 tw-text-4xl tw-font-bold tw-mb-8">
                    Meet the Team
                  </h1>

                  <p class="tw-text-gray-700 tw-text-lg tw-font-light">
                    With over 100 years of combined experience, we've got a
                    well-seasoned team at the helm.
                  </p>
                </div>
              </div>

              <div class="tw-flex tw-flex-row">
                <div class="tw-w-full tw-md:w-6/12 tw-lg:w-3/12 tw-mb-6 tw-px-6 tw-sm:px-6 tw-lg:px-4">
                  <div class="tw-flex tw-flex-col">
                    <a href="#" class="tw-mx-auto">
                      <img
                        class="tw-rounded-2xl tw-drop-shadow-md tw-hover:drop-shadow-xl tw-transition-all tw-duration-200 tw-delay-100"
                        src="/img/mends.png"
                      />
                    </a>

                    <div class="tw-text-center tw-mt-6">
                      <h1 class="tw-text-gray-900 tw-text-xl tw-font-bold tw-mb-1">
                        Tranter Jaskulski
                      </h1>

                      <div class="tw-text-gray-700 tw-font-light tw-mb-2">
                        Founder & Specialist
                      </div>

                      <div
                        class="tw-flex tw-items-center tw-justify-center tw-opacity-50 tw-hover:opacity-100
                                tw-transition-opacity tw-duration-300"
                      >
                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-indigo-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-linkedin tw-text-indigo-500 tw-mx-auto tw-mt-2"></i>
                        </a>

                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-blue-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-twitter tw-text-blue-300 tw-mx-auto tw-mt-2"></i>
                        </a>

                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-orange-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-instagram tw-text-orange-400 tw-mx-auto tw-mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tw-w-full tw-md:w-6/12 tw-lg:w-3/12 tw-mb-6 tw-px-6 tw-sm:px-6 tw-lg:px-4">
                  <div class="tw-flex tw-flex-col">
                    <a href="#" class="tw-mx-auto">
                      <img
                        class="tw-rounded-2xl tw-drop-shadow-md tw-hover:drop-shadow-xl tw-transition-all tw-duration-200 tw-delay-100"
                        src="/img/eva.png"
                      />
                    </a>

                    <div class="tw-text-center tw-mt-6">
                      <h1 class="tw-text-gray-900 tw-text-xl tw-font-bold tw-mb-1">
                        Denice Jagna
                      </h1>

                      <div class="tw-text-gray-700 tw-font-light tw-mb-2">
                        Tired & M. Specialist
                      </div>

                      <div
                        class="tw-flex tw-items-center tw-justify-center tw-opacity-50 tw-hover:opacity-100
                                tw-transition-opacity tw-duration-300"
                      >
                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-indigo-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-linkedin tw-text-indigo-700 tw-mx-auto tw-mt-2"></i>
                        </a>

                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-blue-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-twitter tw-text-blue-400 tw-mx-auto tw-mt-2"></i>
                        </a>

                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-orange-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-instagram tw-text-orange-400 tw-mx-auto tw-mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Faq;
