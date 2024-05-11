import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import Chart from "./Chart";
import { useGlobalContext } from "../../context/GlobalContext";
import History from "./History";
import { rupees } from "../../utils/Icons";

const Dasboard = () => {
  const {
    getIncomes,
    getExpenses,
    totalIncome,
    totalExpense,
    totalBalance,
    incomes,
    expenses,
  } = useGlobalContext();
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);
  return (
    <DashboardStyled>
      <InnerLayout>
        <h2>All Transaction</h2>
        <div className="stat-con">
          <div className="chart-con">
            <Chart />
            <div className="summary">
              <h4>
                Total Income
                <p>
                  {rupees} {totalIncome()}
                </p>
              </h4>
              <h4>
                Total Expense
                <p>
                  {rupees} {totalExpense()}
                </p>
              </h4>
              <h4>
                Total Balance
                <p>
                  {rupees} {totalBalance()}
                </p>
              </h4>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span> Salary</span>Max
            </h2>
            <div className="salary-item">
              <p>{Math.min(...incomes.map((item) => item.amount))}</p>
              <p>{Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h2 className="expense-title">
              Min <span> Expense</span>Max
            </h2>
            <div className="expense-item">
              <p>{Math.min(...expenses.map((item) => item.amount))}</p>
              <p>{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
};
const DashboardStyled = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
  .stat-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }
  .chart-con {
    grid-column: 1 / 4;
    height: 100dvh;
    /* height: 100%; */
  }
  .summary {
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
    h4 {
      background: #fcf6f9;
      border-radius: 10px;
      border: 4px solid white;
      padding: 1rem;
      p {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
  .history-con {
    grid-column: 4 /-1;
    h2 {
      margin: 0.3rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .salary-title,
    .expense-title {
      font-size: 1rem;
      span {
        font-size: 1.2rem;
      }
    }
    .salary-item,
    .expense-item {
      background: #fcf6f9;
      border: 2px solid #ffffff;
      box-shadow: 0 1px 15px rgba(0, 0, 0, 0.06);
      padding: 0.4rem 1rem;
      border-radius: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
export default Dasboard;
