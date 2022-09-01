import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const Input = styled.input`
    border: none;
    color: inherit;
    font-weight: 700;
    font-size: ${size === "small" ? `${14 / 16}rem` : `${18 / 16}rem`};
    padding-left: ${size === "small" ? `${24 / 16}rem` : `${36 / 16}rem`};
    height: ${size === "small" ? "1rem" : "1.5rem"};
    width: 100%;

    &:focus {
      outline-offset: 6px;
    }

    &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
    }
  `;

  const Wrapper = styled.label`
    display: block;
    width: ${width}px;
    border-bottom: ${size === "small" ? "1px solid black" : "2px solid black"};
    position: relative;
    color: ${COLORS.gray700};
    padding-bottom: 4px;

    &:hover {
      color: ${COLORS.black};
    }
  `;

  const IconWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;

    ${Input}:hover + & {
      color: ${COLORS.black};
    }
  `;

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input type="text" placeholder={placeholder}></Input>
      <IconWrapper>
        <Icon id={icon} size={size === "small" ? "16" : "24"}></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

export default IconInput;
