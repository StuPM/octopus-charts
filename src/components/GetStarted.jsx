import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectGetStarted } from "../features/octopus/octopusSlice";

const GetStarted = () => {
  const getStartedFormComponents = useSelector(selectGetStarted);

  const [yourAPIDetails, setYourAPIDetails] = useState([]);

  const setDetailsOnInput = (e) => {
    setYourAPIDetails({ ...yourAPIDetails, [e.target.id]: e.target.value });
    console.log(yourAPIDetails);
  };

  return (
    <>
      <section
        id="GetStarted"
        className="relative flex flex-wrap lg:h-screen lg:items-center"
      >
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Want to compare your usage to mine?
            </h1>

            <p className="mt-4 text-gray-500">
              If you do, enter your API credientals and meter details below,
              this can be found{" "}
              <a href="https://octopus.energy/dashboard/new/accounts/personal-details/api-access">
                here
              </a>
              .
            </p>
            <p className="mt-4 text-gray-500">
              Otherwise, keep scrolling just to see my electric and gas usage.
            </p>
          </div>

          <form
            action=""
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            onInput={setDetailsOnInput}
          >
            {getStartedFormComponents.map((element) => (
              <div key={element.label}>
                <label htmlFor={element.label} className="sr-only">
                  {element.label}
                </label>

                <div className="relative">
                  <input
                    id={element.label}
                    type={element.type}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={element.text}
                  />

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </form>
        </div>
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default GetStarted;
