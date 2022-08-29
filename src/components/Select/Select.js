import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const Wrapper = styled.div`
    color: ${COLORS.gray700};
    position: relative;
    display: flex;
    width: fit-content;
    padding: 12px 16px;
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;

    &:hover {
      color: ${COLORS.black};
    }
  `;

  const Dropdown = styled.select`
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  `;

  const Visible = styled.div`
    font-size: 1rem;
    line-height: ${19 / 16}rem;
    padding-right: 18px;
    padding-top: 2px;
  `;

  return (
    <Wrapper tabIndex={1}>
      <Dropdown value={value} onChange={onChange}>
        {children}
      </Dropdown>
      <Visible>{displayedValue}</Visible>
      <Icon id="chevron-down" />
    </Wrapper>
  );
};

export default Select;
