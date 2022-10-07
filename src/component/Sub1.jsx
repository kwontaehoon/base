import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Sub2 from './Sub2'

const Container = styled.div`
    border: 1px solid black;
    width: 300px;
    height: 300px;
`

const Sub1 = () => {
    const dispatch = useDispatch();
  return (
    <Container>
        <div>sub1</div>
        <input type='button' value='+' onClick={()=>{
            dispatch({ type: 'PLUS'})
        }}></input>
        <Sub2 />
    </Container>
  )
}

export default Sub1