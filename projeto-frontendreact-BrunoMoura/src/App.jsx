import { useState } from 'react'
import './App.css'
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  /* const [count, setCount] = useState(0)
 */
  return (
    <div className="App">
      <GlobalStyles />
      <FlexContainer></FlexContainer>
    </div>
  )
}

export default App
