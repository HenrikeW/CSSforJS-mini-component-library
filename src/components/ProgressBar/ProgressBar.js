/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const height = {
    small: "8px",
    medium: "12px",
    large: "24px",
  };

  const Container = styled.article`
    --height: ${height[size]};

    width: 370px;
    height: var(--height);
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
    border-radius: ${size === "large" ? "8px" : "4px"};
    overflow: hidden;
    padding: ${size === "large" ? "4px" : 0};
  `;

  const Bar = styled.div`
    width: ${value}%;
    height: 100%;
    background-color: ${COLORS.primary};
    border: ${size === "large" ? "4px solid transparent" : "none"};
    border-radius: 4px 0px 0px 4px;
  `;

  return (
    <>
      <VisuallyHidden>
        <label htmlFor="loadingBar">Loading</label>
      </VisuallyHidden>
      <Container
        role="progressbar"
        id="loadingBar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <Bar></Bar>
      </Container>
    </>
  );
};

export default ProgressBar;
