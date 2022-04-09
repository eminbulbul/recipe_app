import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyles";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      {/* sayfanın tamamı */}
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Mehmet Emin Bülbül </span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Mehmet Emin</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h3>
          I've already known Python, Html , Css ,Sass ,Bootstrap ,JavaScript,
          ReactJS, SQL.
        </h3>
        <h2>
          <a href="mailto:mehmeteminbuly@gmail.com">Send email</a> :
          mehmeteminbul@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
