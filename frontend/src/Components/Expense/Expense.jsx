import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/GlobalContext";
import IncomeItem from "../Income/IncomeItem";
import ExpenseForm from "./ExpenseForm";
const Expense = () => {
  const { expenses, getExpenses, deleteExpense, totalExpense } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, [expenses]);

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h2>Expense</h2>
        <h3 className="total-expense">
          Total Expense: <span>Rs {totalExpense()}</span>
        </h3>
        <div className="expense-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="Expenses">
            {expenses.map((expense) => {
              const { _id, title, amount, category, date, description, type } =
                expense;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  date={date}
                  description={description}
                  type={type}
                  amount={amount}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
};
const ExpenseStyled = styled.div`
  h2 {
    margin-bottom: 0.5rem;
  }
  display: flex;
  overflow: auto;

  .total-expense {
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
  .expense-content {
    display: flex;
    gap: 2rem;
    .Expenses {
      flex: 1;
    }
  }
`;
export default Expense;
