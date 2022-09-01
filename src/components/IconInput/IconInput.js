import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const focusInput = () => {
    document.getElementById("input").focus();
  };

  const Input = styled.input`
    border: none;
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
    padding-left: ${size === "small" ? "24px" : "36px"};
    height: ${size === "small" ? "16px" : "24px"};
    width: 100%;

    &:focus {
      outline-offset: 4px;
    }

    &:placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
    }

    &:hover {
      color: ${COLORS.black};
    }
  `;

  const Wrapper = styled.div`
    display: flex;
    width: ${width}px;
    border-bottom: 1px solid black;
    position: relative;
    color: ${COLORS.gray700};
    font-weight: 700;
    font-size: ${size === "small" ? "14px" : "18px"};
    padding-bottom: 4px;
  `;

  const IconWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    color: inherit;

    ${Input}:hover + & {
      color: ${COLORS.black};
    }
  `;

  return (
    <Wrapper>
      <VisuallyHidden>
        <label htmlFor="input">{label}</label>
      </VisuallyHidden>
      <Input type="text" placeholder={placeholder} id="input"></Input>
      <IconWrapper onClick={focusInput}>
        <Icon id={icon} size={size === "small" ? "16" : "24"}></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

export default IconInput;
