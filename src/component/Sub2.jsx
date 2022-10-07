import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid black;
    width: 200px;
    height: 200px;

`

const Sub2 = () => {
    const number = useSelector(state=>state.number);
  return (
    <Container>
        <div>sub2</div>
        <div>{number}</div>
    </Container>
  )
}

export default Sub2