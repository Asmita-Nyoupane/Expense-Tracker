import React from "react";
import styled from "styled-components";

const Button = ({ name, icon, onClick, bg, bPad, color, bRad }) => {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
};
const ButtonStyled = styled.button`
  font-size: inherit;
  outline: none;
  border-style: none;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 0.5 rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
`;
export default Button;
