import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import Form from "./Form";
import { useGlobalContext } from "../../context/GlobalContext";
import IncomeItem from "./IncomeItem";
const Income = () => {
  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, [incomes]);

  return (
    <IncomeStyled>
      <InnerLayout>
        <h2>Income</h2>
        <h3 className="total-income">
          Total Income: <span>Rs {totalIncome()}</span>
        </h3>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, category, date, type, description } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  date={date}
                  type={type}
                  amount={amount}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};
const IncomeStyled = styled.div`
  h2 {
    margin-bottom: 0.5rem;
  }
  display: flex;
  overflow: auto;

  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    padding: 0.5rem 0;
    border-radius: 1rem;
    margin-bottom: 1rem;
    gap: 1rem;
    background: #fcf6f9;
    span {
      color: var(--color-green);
      font-size: 2rem;
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;
export default Income;
