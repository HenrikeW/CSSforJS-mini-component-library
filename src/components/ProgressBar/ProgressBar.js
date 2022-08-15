/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const height = {
    small: "8px",
    medium: "12px",
    large: "16px",
  };

  const Container = styled.article`
    --height: ${height[size]};

    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: ${size === "large" ? "8px" : "4px"};
    overflow: hidden;
    padding: ${size === "large" ? "4px" : 0};
  `;

  const Bar = styled.div`
    width: ${value}%;
    height: var(--height);
    background-color: ${COLORS.primary};
    border-radius: 4px;
  `;

  const BarWrapper = styled.div`
    border-radius: 4px 0px 0px 4px;
    overflow: hidden;
    height: 100%;
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
        <BarWrapper>
          <Bar></Bar>
        </BarWrapper>
      </Container>
    </>
  );
};

export default ProgressBar;
