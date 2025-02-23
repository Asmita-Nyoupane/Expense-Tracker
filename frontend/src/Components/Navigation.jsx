import React, { useState } from "react";
import styled from "styled-components";
import avatar from "../assets/Images/avatar.jpeg";
import { menuItems } from "../utils/menuItems";
import { signout } from "../utils/Icons";
const Navigation = ({ active, setActive }) => {
  return (
    <NanStyled>
      <div className="user-container">
        <img src={avatar} alt=" avatar" />
        <div className="text">
          <h2>Sona</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? "active" : ""}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="bottom-nav">
        <li>{signout} Sign Out</li>
      </div>
    </NanStyled>
  );
};
const NanStyled = styled.div`
  padding: 2rem;
  /* width: 374px; */
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  border-radius: 32px;
  backdrop-filter: blur(4.5px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-container {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #ffffff;
      background-color: #fcf6f9;
      padding: 0.2rem;
      box-shadow: 0px 1 px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: rgba(34, 34, 96, 1);
    }
    p {
      color: rgba(34, 34, 96, 0.6);
    }
  }
  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
    }
    .active {
      color: rgba(34, 34, 96, 1);
      i {
        color: rgba(34, 34, 96, 1);
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background: #222260;
        border-radius: 0 10px 10px 0;
      }
    }
  }
`;

export default Navigation;
