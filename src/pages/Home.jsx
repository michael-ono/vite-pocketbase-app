import React from 'react'
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h3>Create a task today</h3>
      <StyledButton>Task</StyledButton>
    </div>
  )
}

const StyledButton = styled.button`
  background-color: #f0f0f0;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;