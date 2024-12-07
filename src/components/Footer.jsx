import styled, { keyframes } from "styled-components";

import { Button } from "./Button";

import { Row } from "../layout-components/Row";
import { Col } from "../layout-components/Col";
import { Divider } from "../layout-components/Divider";

import React from "../assets/icons/React";
import Firebase from "../assets/icons/Firebase";
import StyledComponents from "../assets/icons/StyledComponents";

export const Footer = () => {
  return (
    <Col style={{ padding: "2rem 1rem" }}>
      <GradientText>MadeMyWay</GradientText>

      <Divider space={8} visible={false} />

      <p
        style={{
          fontSize: "var(--para-text)",
          fontWeight: "var(--medium)",
          color: "var(--light-text)",
          textAlign: "center",
        }}
      >
        MadeMyWay is place where you can upload your local attractions for
        other's to see.If you like this project you may reach out to me,follow
        me,DM me and if you have any suggesstion please do let me know.
      </p>

      <Divider space={20} label="Tech Used" />

      <Row gap={50}>
        <Button variant="secondary" size="sm" style={{ padding: "0 10px" }}>
          <React />
        </Button>

        <Button variant="secondary" size="sm" style={{ padding: "0 10px" }}>
          <Firebase />
        </Button>

        <Button variant="secondary" size="sm" style={{ padding: "0 10px" }}>
          <StyledComponents />
        </Button>
      </Row>
    </Col>
  );
};

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientText = styled.p`
  font-size: 3rem;
  font-weight: var(--medium);
  text-align: center;

  background-size: 300% 300% !important;
  background: #fe5a59;
  background-image: linear-gradient(
    -45deg,
    #fe5a59,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab
  );

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  animation: ${gradient} 7s ease infinite alternate;
`;
