import styled from 'styled-components'

/*---index-Style---*/

// @Container
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

// @Contact-Main
export const Main = styled.main`
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
  }
  padding: 20px;
  width: 100%;
  height: 100%;
`
