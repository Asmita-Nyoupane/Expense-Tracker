import { useState } from "react";
import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Navigation from "./Components/Navigation";
import Dasboard from "./Components/Dashboard/Dasboard";
import Income from "./Components/Income/Incomes";
import Expense from "./Components/Expense/Expense";

function App() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dasboard />;
      case 2:
        return <Income />;
      case 3:
        return <Expense />;
      case 4:
        return <Dasboard />;
      default:
        return <Dasboard />;
    }
  };
  return (
    <AppStyled className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-color: rgba(255, 226, 226, 1);
  background-image: linear-gradient(
    to right,
    rgba(255, 226, 226, 1),
    rgba(213, 199, 255, 1)
  );
  position: relative;
  main {
    flex: 1;
    background-color: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
`;
export default App;
