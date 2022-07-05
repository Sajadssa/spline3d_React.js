import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "./images/esteghlal-fc-1-logo-svg-vector.svg";
import IconTwitter from "./images/icon-twitter.svg";
import IconYoutube from "./images/icon-youtube.svg";
import IconLaptop from "./images/icon-laptop.svg";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/GiX9ykPCN7f-NtpS/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            {" "}
            <img src={Logo} alt="logo" />
          </li>
          <li>
            {" "}
            <a href="/">Home </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/">Download </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/">App </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/">Login </a>{" "}
          </li>
          <li>
            {" "}
            <button> Getting Started</button>{" "}
          </li>
        </Menu>
        <h1> Amazing 3D Website with Spline and React</h1>
        <p>
          This is a 3D website made with spline and react and it is perspective
          I hope you enjoy visiting this website
        </p>
        <button>
          <img src={IconLaptop} alt="Register" />
          Sign in
        </button>
      </Content>
      <Social>
        <div />
        <img src={IconTwitter} alt="twitter" />
        <img src={IconYoutube} alt="youtube" />
      </Social>
    </Wrapper>
  );
}

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }

    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 350px;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);

    display: flex;
    justify-content: center;
    gap: 12px;
    align-items: center;
    transition: 1s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateY(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateY(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateY(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateY(-50px);
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  img {
    width: 70px;
    height: 70px;
  }
  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      padding: 8px 20px;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;
      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;
const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: Linear-gradient(
      180deg,
      208b6f 90%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
