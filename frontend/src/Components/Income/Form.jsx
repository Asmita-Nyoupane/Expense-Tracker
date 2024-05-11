import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { plus } from "../../utils/Icons";
import { useGlobalContext } from "../../context/GlobalContext";
import Button from "../Button";
const initalValue = {
  title: "",
  amount: "",
  category: "",
  description: "",
  date: null,
};

const Form = () => {
  const { addIncome, getIncomes } = useGlobalContext();
  const [inputState, setInputState] = useState(initalValue);
  const { title, amount, category, date, description } = inputState;
  const onInputChange = (e) => {
    if (e.target) {
      setInputState({ ...inputState, [e.target.name]: e.target.value });
    } else {
      setInputState({ ...inputState, date: e });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("before", inputState);
    addIncome(inputState);
    getIncomes();
    setInputState(initalValue);
  };

  return (
    <FormStyled onSubmit={(e) => handleSubmit(e)} autocomplete="off">
      <div className="input-control">
        <input
          type="text"
          value={title}
          name="title"
          placeholder=" Example Salary"
          required
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          value={amount}
          name="amount"
          placeholder="Rs"
          required
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <div className="option">
        <div className="input-control">
          <DatePicker
            id="date"
            placeholderText="Enter A Date"
            selected={date}
            dateFormat="dd/MM/yyyy"
            required
            onChange={(date) => onInputChange(date)}
          />
        </div>
        <div className=" selects input-control">
          <select
            value={category}
            name="category"
            placeholder="category"
            required
            onChange={(e) => onInputChange(e)}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="stocks">Stocks</option>
            <option value="youtube">Youtube</option>
            <option value="bank">Bank Transfer</option>
            <option value="investment">Investment</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="input-control">
        <textarea
          rows={4}
          cols={30}
          value={description}
          name="description"
          placeholder="You can give short description"
          onChange={(e) => onInputChange(e)}
        />
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Income"}
          icon={plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent)"}
          color={"#fff"}
        />
      </div>
    </FormStyled>
  );
};
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  flex-grow: 1;

  input,
  textarea,
  select {
    margin: 1rem 0;
    /* margin-bottom: 1rem;
    margin-right: 1rem; */
    font-family: inherit;
    font-size: 1rem;
    outline: none;
    border: none;
    padding: 0.8rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.6);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control > * {
    width: 100%;
  }
  #date {
    width: 100%;
  }

  /* .input-control {
    
    input,
    select{
      width: 100%;
    }
  } */
  .selects {
    /* display: flex;
    justify-content: flex-end; */
    margin-right: 1rem;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;
export default Form;
