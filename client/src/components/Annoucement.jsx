import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
  height: 30px;
  background-color: #430f58;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Annoucement = () => {
  return (
    <Container>
        Deal Of the Week! 20% Discount in Orders of +$100 USD
    </Container>
  )
}

export default Annoucement