import React from 'react'
import styled from 'styled-components'
import Sub1 from './Sub1'
// import { createStore } from 'redux'
// import { Provider, useSelector, useDispatch, connect } from 'react-redux'
// function reducer(currentState, action){
//     if(currentState === undefined){
//         return{
//             number: 1,
//         }
//     }
//     const newState = {...currentState};
//     return newState;
// }
// const store = createStore(reducer);

const Container = styled.div`
    border: 1px solid black;
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Main = () => {

  return (
    <Container>
            <div>main</div>
            <Sub1 />
    </Container>
  )
}

export default Main