import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  clase,
  principal,
  secondary,
  textButton,
  textButton2,
  button,
  link,
}) => {
  return (
    <div
      class={` ${clase}  jumbotron m-0  pt-5 mt-5 bg-light rounded-0 d-flex flex-column justify-content-start align-items-end hero`}
    >
      <div className="d-flex flex-column align-items-end hero-message text-shadow">
        <h1 class="display-4 m-3  text-white">{principal}</h1>
        <p class="lead m-3  text-white">{secondary}</p>
        <hr class="my-4" />
        <p class="lead  text-white text-smaller mb-4">
          <span className="lead  mr-5 pr-5 mb-4">{textButton}</span>
          <span className="text-primary"> {textButton2}</span>
        </p>
        <Link
          to={`/${link}`}
          className="btn btn-outline-light rounded-0 btn-lg w-75 font-weight-light  "
        >
          {button}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
